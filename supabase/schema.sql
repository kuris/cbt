-- ==============================================================================
-- 전기기사 필기 준비 (cbt.chatgpts.kr) Database Schema
-- Supabase PostgreSQL with Row Level Security (RLS)
-- ==============================================================================

-- 1. 시험 응시 및 문제풀이 기록 (electric_quiz_logs)
CREATE TABLE IF NOT EXISTS public.electric_quiz_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    exam_type VARCHAR(32) NOT NULL, -- 'daily', 'random', 'mock', 'past', 'subject'
    subject_id VARCHAR(32),         -- 'em', 'pe', 'emach', 'cc', 'er', or 'all'
    round_name VARCHAR(64),         -- e.g. '2024년 제1회', '과목별 집중: 전기자기학'
    score NUMERIC(5, 2) NOT NULL,   -- e.g. 75.00
    is_passed BOOLEAN DEFAULT FALSE,
    has_sub_fail BOOLEAN DEFAULT FALSE, -- 과락 여부 (과목당 40점 미만)
    correct_count INT NOT NULL DEFAULT 0,
    total_count INT NOT NULL DEFAULT 0,
    time_spent INT NOT NULL DEFAULT 0,  -- 소요시간 (초)
    subject_scores JSONB DEFAULT '{}'::jsonb, -- { "em": 80, "pe": 65, ... }
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. 오답노트 (electric_wrong_answers)
CREATE TABLE IF NOT EXISTS public.electric_wrong_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    question_id VARCHAR(64) NOT NULL,
    subject_id VARCHAR(32) NOT NULL,
    selected_option INT NOT NULL,
    correct_option INT NOT NULL,
    wrong_count INT NOT NULL DEFAULT 1,
    is_resolved BOOLEAN NOT NULL DEFAULT FALSE,
    last_wrong_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    resolved_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(user_id, question_id)
);

-- 3. 학습 통계 및 연속 출석 (electric_progress)
CREATE TABLE IF NOT EXISTS public.electric_progress (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    streak_days INT NOT NULL DEFAULT 1,
    last_study_date DATE NOT NULL DEFAULT CURRENT_DATE,
    total_solved INT NOT NULL DEFAULT 0,
    total_correct INT NOT NULL DEFAULT 0,
    subject_stats JSONB DEFAULT '{"em":{"solved":0,"correct":0},"pe":{"solved":0,"correct":0},"emach":{"solved":0,"correct":0},"cc":{"solved":0,"correct":0},"er":{"solved":0,"correct":0}}'::jsonb,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. 즐겨찾기 문제 (electric_favorites)
CREATE TABLE IF NOT EXISTS public.electric_favorites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    question_id VARCHAR(64) NOT NULL,
    subject_id VARCHAR(32) NOT NULL,
    note TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(user_id, question_id)
);

-- 5. 문제 오류 신고 (electric_error_reports)
CREATE TABLE IF NOT EXISTS public.electric_error_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    user_email VARCHAR(255),
    question_id VARCHAR(64) NOT NULL,
    subject_name VARCHAR(64),
    issue_type VARCHAR(64) NOT NULL, -- 'typo', 'wrong_answer', 'explanation_error', 'image_error', 'etc'
    content TEXT NOT NULL,
    status VARCHAR(32) NOT NULL DEFAULT 'pending', -- 'pending', 'resolved', 'dismissed'
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 인덱스 설정
CREATE INDEX IF NOT EXISTS idx_quiz_logs_user ON public.electric_quiz_logs (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_wrong_answers_user ON public.electric_wrong_answers (user_id, is_resolved, subject_id);
CREATE INDEX IF NOT EXISTS idx_favorites_user ON public.electric_favorites (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_error_reports_status ON public.electric_error_reports (status, created_at DESC);

-- RLS (Row Level Security) 활성화
ALTER TABLE public.electric_quiz_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.electric_wrong_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.electric_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.electric_favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.electric_error_reports ENABLE ROW LEVEL SECURITY;

-- 1) electric_quiz_logs 정책
CREATE POLICY "Users can manage own quiz logs"
ON public.electric_quiz_logs
FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 2) electric_wrong_answers 정책
CREATE POLICY "Users can manage own wrong answers"
ON public.electric_wrong_answers
FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 3) electric_progress 정책
CREATE POLICY "Users can manage own progress"
ON public.electric_progress
FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 4) electric_favorites 정책
CREATE POLICY "Users can manage own favorites"
ON public.electric_favorites
FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 5) electric_error_reports 정책 (모든 사용자/비로그인 작성 가능, 관리자 및 본인 조회)
CREATE POLICY "Anyone can submit error reports"
ON public.electric_error_reports
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Users can view own error reports"
ON public.electric_error_reports
FOR SELECT
USING (auth.uid() = user_id OR auth.uid() IS NULL);

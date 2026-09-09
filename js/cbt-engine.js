/**
 * 전기기사 필기 준비 - 공통 CBT 퀴즈 및 채점 엔진 (cbt-engine.js)
 */

(function (global) {
  'use strict';

  class CBTEngine {
    constructor(options = {}) {
      this.mode = options.mode || 'practice'; // 'practice' (즉시채점) | 'exam' (일괄채점/타이머)
      this.questions = options.questions || [];
      this.currentIndex = 0;
      this.userAnswers = {}; // { [index]: selectedChoiceIndex }
      this.timerSeconds = options.durationSeconds || 0; // 모의고사 카운트다운용 (0이면 카운트업)
      this.initialTimer = this.timerSeconds;
      this.timerInterval = null;
      this.isFinished = false;
      this.startTime = Date.now();

      this.mountEl = options.mountEl || document.getElementById('cbt-mount');
      this.omrMountEl = options.omrMountEl || document.getElementById('omr-mount');
      this.onFinish = options.onFinish || null;

      if (this.questions.length > 0) {
        this.render();
        this.startTimer();
      }
    }

    startTimer() {
      if (this.timerInterval) clearInterval(this.timerInterval);
      const timerDisplay = document.getElementById('cbt-timer-display');

      this.timerInterval = setInterval(() => {
        if (this.isFinished) {
          clearInterval(this.timerInterval);
          return;
        }

        if (this.initialTimer > 0) {
          this.timerSeconds--;
          if (this.timerSeconds <= 0) {
            clearInterval(this.timerInterval);
            this.finishExam(true); // 시간 초과 자동 제출
            return;
          }
        } else {
          this.timerSeconds++;
        }

        if (timerDisplay) {
          const m = Math.floor(this.timerSeconds / 60);
          const s = this.timerSeconds % 60;
          timerDisplay.textContent = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
          if (this.initialTimer > 0 && this.timerSeconds < 300) {
            timerDisplay.parentElement.classList.add('warning');
          }
        }
      }, 1000);
    }

    render() {
      if (!this.mountEl || this.questions.length === 0) return;

      const q = this.questions[this.currentIndex];
      const total = this.questions.length;
      const selected = this.userAnswers[this.currentIndex];
      const isAnswered = typeof selected === 'number';
      const isPractice = this.mode === 'practice';
      const isFav = global.CBTStorage ? global.CBTStorage.isFavorite('question', q.id) : false;

      // 1. OMR 패널 업데이트
      this.renderOMR();

      // 2. 메인 문제 카드 렌더링
      this.mountEl.innerHTML = `
        <div class="cbt-header-bar">
          <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
            <span class="cbt-exam-badge">⚡ ${q.subject}</span>
            <span style="font-size: 0.82rem; color: var(--text-muted);">${q.chapter || ''}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 14px;">
            <div class="cbt-progress-indicator">
              문항 <span>${this.currentIndex + 1}</span> / ${total}
            </div>
            <div class="cbt-timer-badge">
              <span>⏱️</span> <span id="cbt-timer-display">00:00</span>
            </div>
          </div>
        </div>

        <div class="question-block">
          <div class="question-title-area">
            <span class="question-num-tag">Q${this.currentIndex + 1}</span>
            <div class="question-stem">${q.question}</div>
          </div>

          ${q.diagram_text ? `<div class="diagram-box">${q.diagram_text}</div>` : ''}

          <div class="choices-list">
            ${q.choices.map((choice, idx) => {
              let stateClass = '';
              if (selected === idx) stateClass = 'selected';

              // 연습 모드에서 선택 후 정답/오답 즉시 강조
              if (isPractice && isAnswered) {
                if (idx === q.answer) stateClass += ' correct';
                else if (selected === idx) stateClass += ' wrong';
              }

              return `
                <button type="button" class="choice-btn ${stateClass}" data-idx="${idx}" ${isPractice && isAnswered ? 'disabled' : ''}>
                  <span class="choice-num">${idx + 1}</span>
                  <span class="choice-text">${choice}</span>
                </button>
              `;
            }).join('')}
          </div>

          <!-- 연습 모드 즉시 해설 박스 -->
          ${isPractice && isAnswered ? `
            <div class="explanation-box">
              <div class="explanation-header">
                <div class="explanation-title">
                  <span>${selected === q.answer ? '✅ 정답입니다!' : '❌ 오답입니다.'}</span>
                  <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: normal; margin-left: 8px;">(정답: ${q.answer + 1}번)</span>
                </div>
                <div style="display: flex; gap: 8px;">
                  <button type="button" class="btn-cbt-nav" id="btn-fav-toggle" style="padding: 4px 10px; font-size: 0.8rem;">
                    ${isFav ? '⭐ 찜해제' : '☆ 문제찜'}
                  </button>
                  <button type="button" class="btn-cbt-nav" id="btn-report-problem" style="padding: 4px 10px; font-size: 0.8rem; color: var(--danger);">
                    🚨 오류신고
                  </button>
                </div>
              </div>
              <div class="explanation-text">${q.explanation}</div>
              <div class="explanation-meta">
                <span>출처: ${q.source || '공개 CBT'} · ${q.license_note || '해설 자체 작성'}</span>
                <span>난이도: ${q.difficulty || '보통'}</span>
              </div>

              <!-- 비전공자 맞춤 쉬운 설명 3중 솔루션 (화면 내 즉시보기 + ChatGPT 자동채움 + Gemini) -->
              <div class="gemini-action-wrap">
                <div class="gemini-help-hint">
                  <span>💡</span>
                  <span>정답·수식이 어렵다면? (비전공자 눈높이 풀이)</span>
                </div>
                <div style="display: flex; gap: 6px; flex-wrap: wrap; align-items: center;">
                  <button type="button" class="btn-gemini-ask btn-gemini-ask-sm" id="btn-toggle-inline-easy" style="background: linear-gradient(135deg, #059669, #0D9488); border-color: #34D399;">
                    <span class="gemini-sparkle">💡</span>
                    <span>쉬운 설명 바로보기 (복붙X)</span>
                  </button>
                  <button type="button" class="btn-ai-sub" id="btn-ask-chatgpt-auto" title="질문이 자동으로 채워진 채로 열립니다">
                    <span>🤖</span>
                    <span>ChatGPT 자동입력 ↗</span>
                  </button>
                  <button type="button" class="btn-ai-sub" id="btn-ask-gemini-copy" title="질문 자동복사 후 제미나이 열기">
                    <span>✨</span>
                    <span>Gemini ↗</span>
                  </button>
                </div>
              </div>
            </div>
          ` : ''}
        </div>

        <div class="cbt-control-bar">
          <div style="display: flex; gap: 8px;">
            <button type="button" class="btn-cbt-nav" id="cbt-btn-prev" ${this.currentIndex === 0 ? 'disabled' : ''}>
              ← 이전 문항
            </button>
            <button type="button" class="btn-cbt-nav" id="cbt-btn-next" ${this.currentIndex === total - 1 ? 'disabled' : ''}>
              다음 문항 →
            </button>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            ${!isPractice ? `
              <button type="button" class="btn-cbt-nav" id="btn-report-problem" style="font-size: 0.85rem;">
                🚨 문제신고
              </button>
            ` : ''}

            ${this.currentIndex === total - 1 || Object.keys(this.userAnswers).length === total ? `
              <button type="button" class="btn-cbt-action" id="cbt-btn-submit">
                📊 최종 채점하기
              </button>
            ` : `
              <button type="button" class="btn-cbt-action" id="cbt-btn-quick-next">
                ${this.currentIndex < total - 1 ? '다음 문제' : '채점'}
              </button>
            `}
          </div>
        </div>
      `;

      this.bindEvents(q);
    }

    renderOMR() {
      if (!this.omrMountEl) return;
      const total = this.questions.length;

      this.omrMountEl.innerHTML = `
        <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <span>📋 OMR 답안 현황</span>
          <span style="font-size: 0.8rem; color: var(--primary);">${Object.keys(this.userAnswers).length} / ${total} 완료</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; max-height: 280px; overflow-y: auto; padding-right: 4px;">
          ${this.questions.map((_, i) => {
            const isAns = typeof this.userAnswers[i] === 'number';
            const isCur = this.currentIndex === i;
            let bg = isCur ? 'var(--primary-light)' : (isAns ? '#E2E8F0' : 'var(--bg-card)');
            let color = isCur ? 'var(--primary)' : 'var(--text-main)';
            let border = isCur ? '2px solid var(--primary)' : '1px solid var(--border)';

            return `
              <button type="button" class="omr-btn" data-idx="${i}" style="padding: 8px 4px; font-size: 0.8rem; font-weight: 700; border-radius: 4px; background: ${bg}; color: ${color}; border: ${border}; text-align: center;">
                ${i + 1}
              </button>
            `;
          }).join('')}
        </div>
      `;

      this.omrMountEl.querySelectorAll('.omr-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          this.currentIndex = idx;
          this.render();
        });
      });
    }

    bindEvents(currentQ) {
      // 선택지 클릭
      this.mountEl.querySelectorAll('.choice-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const choiceIdx = parseInt(btn.getAttribute('data-idx'), 10);
          this.selectAnswer(this.currentIndex, choiceIdx, currentQ);
        });
      });

      // 이전 / 다음
      const prevBtn = document.getElementById('cbt-btn-prev');
      const nextBtn = document.getElementById('cbt-btn-next');
      const quickNextBtn = document.getElementById('cbt-btn-quick-next');
      const submitBtn = document.getElementById('cbt-btn-submit');

      if (prevBtn) prevBtn.addEventListener('click', () => { this.currentIndex--; this.render(); });
      if (nextBtn) nextBtn.addEventListener('click', () => { this.currentIndex++; this.render(); });
      if (quickNextBtn) {
        quickNextBtn.addEventListener('click', () => {
          if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.render();
          } else {
            this.finishExam();
          }
        });
      }
      if (submitBtn) submitBtn.addEventListener('click', () => { this.finishExam(); });

      // 즐겨찾기 토글
      const favBtn = document.getElementById('btn-fav-toggle');
      if (favBtn && global.CBTStorage) {
        favBtn.addEventListener('click', async () => {
          const isNowFav = await global.CBTStorage.toggleFavorite('question', currentQ.id, currentQ.question);
          favBtn.textContent = isNowFav ? '⭐ 찜해제' : '☆ 문제찜';
        });
      }

      // 오류 신고 모달
      const reportBtn = document.getElementById('btn-report-problem');
      if (reportBtn && global.CBTReport) {
        reportBtn.addEventListener('click', () => {
          global.CBTReport.open(currentQ);
        });
      }

      // 비전공자 맞춤 쉬운 설명 버튼들
      const inlineBtn = document.getElementById('btn-toggle-inline-easy');
      if (inlineBtn && global.CBTGemini) {
        inlineBtn.addEventListener('click', () => {
          global.CBTGemini.toggleInline(inlineBtn, currentQ);
        });
      }

      const chatGptBtn = document.getElementById('btn-ask-chatgpt-auto');
      if (chatGptBtn && global.CBTGemini) {
        chatGptBtn.addEventListener('click', () => {
          global.CBTGemini.askChatGPT(currentQ);
        });
      }

      const geminiBtn = document.getElementById('btn-ask-gemini-copy');
      if (geminiBtn && global.CBTGemini) {
        geminiBtn.addEventListener('click', () => {
          global.CBTGemini.askQuestion(currentQ);
        });
      }
    }

    selectAnswer(qIndex, choiceIdx, q) {
      this.userAnswers[qIndex] = choiceIdx;

      // 연습 모드인 경우 오답 시 즉시 오답노트에 추가
      if (this.mode === 'practice') {
        if (choiceIdx !== q.answer && global.CBTStorage) {
          global.CBTStorage.addWrongAnswer(q, choiceIdx);
        }
      }

      this.render();
    }

    finishExam(isTimeout = false) {
      this.isFinished = true;
      if (this.timerInterval) clearInterval(this.timerInterval);

      // 점수 및 통계 산출
      let correctCount = 0;
      const total = this.questions.length;
      const subjectStats = {};

      this.questions.forEach((q, idx) => {
        const userChoice = this.userAnswers[idx];
        const isCorrect = userChoice === q.answer;

        if (isCorrect) correctCount++;
        else {
          // 일괄 채점 시 틀린 문제 오답노트에 자동 등록
          if (global.CBTStorage) {
            global.CBTStorage.addWrongAnswer(q, userChoice !== undefined ? userChoice : -1);
          }
        }

        // 과목별 통계 누적
        if (!subjectStats[q.subject]) {
          subjectStats[q.subject] = { total: 0, correct: 0 };
        }
        subjectStats[q.subject].total++;
        if (isCorrect) subjectStats[q.subject].correct++;
      });

      const score = Math.round((correctCount / total) * 100);
      const duration = Math.round((Date.now() - this.startTime) / 1000);

      // 과락 여부 판정 (과목별 40점 미만 시 과락)
      let hasFailSubject = false;
      const subjectScores = {};
      Object.keys(subjectStats).forEach(sub => {
        const sTotal = subjectStats[sub].total;
        const sCorr = subjectStats[sub].correct;
        const sScore = Math.round((sCorr / sTotal) * 100);
        subjectScores[sub] = sScore;
        if (sScore < 40) hasFailSubject = true;
      });

      const isPass = score >= 60 && !hasFailSubject;

      // 결과 저장
      if (global.CBTStorage) {
        global.CBTStorage.saveQuizResult({
          mode: this.mode,
          subject: this.questions[0] ? this.questions[0].subject : '전과목',
          score: score,
          total: total,
          correct: correctCount,
          duration: duration
        });
      }

      this.renderResultScreen({
        score,
        total,
        correctCount,
        duration,
        isPass,
        hasFailSubject,
        subjectScores,
        isTimeout
      });

      if (this.onFinish) {
        this.onFinish({ score, isPass, correctCount, total });
      }
    }

    renderResultScreen(res) {
      if (!this.mountEl) return;

      const m = Math.floor(res.duration / 60);
      const s = res.duration % 60;

      this.mountEl.innerHTML = `
        <div class="cbt-result-card">
          <span class="result-badge ${res.isPass ? 'pass' : 'fail'}">
            ${res.isPass ? '🎉 시험 합격 기준 도달' : (res.hasFailSubject ? '⚠️ 과목 과락 발생' : '📉 합격 기준 미달')}
          </span>

          <div class="result-score-title">최종 취득 점수</div>
          <div class="result-score-number">${res.score}점</div>

          <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 520px; margin: 0 auto 18px;">
            ${res.isPass 
              ? '축하합니다! 전 과목 40점 이상, 평균 60점 이상을 달성하셨습니다.' 
              : (res.hasFailSubject 
                ? '평균 점수와 상관없이 과목당 40점 미만인 과목이 존재하여 과락 처리되었습니다.' 
                : '평균 60점 이상을 달성해야 합격할 수 있습니다. 틀린 문제를 복습해보세요.')}
          </p>

          <div class="result-summary-grid">
            <div class="result-sub-box">
              <div class="result-sub-label">정답 / 총 문항</div>
              <div class="result-sub-val" style="color: var(--success);">${res.correctCount} / ${res.total}</div>
            </div>
            <div class="result-sub-box">
              <div class="result-sub-label">오답 수</div>
              <div class="result-sub-val" style="color: var(--danger);">${res.total - res.correctCount}개</div>
            </div>
            <div class="result-sub-box">
              <div class="result-sub-label">풀이 시간</div>
              <div class="result-sub-val">${m}분 ${s}초</div>
            </div>
          </div>

          <!-- 과목별 성적표 -->
          <div style="max-width: 600px; margin: 0 auto 32px; text-align: left; background: var(--bg-subtle); padding: 18px; border-radius: var(--radius-md);">
            <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 12px; color: var(--text-main);">
              📊 과목별 점수 및 과락 여부
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${Object.keys(res.subjectScores).map(sub => {
                const sc = res.subjectScores[sub];
                const isSubFail = sc < 40;
                return `
                  <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem; padding: 4px 0; border-bottom: 1px dashed var(--border);">
                    <span style="color: var(--text-main); font-weight: 600;">${sub}</span>
                    <span style="font-weight: 700; color: ${isSubFail ? 'var(--danger)' : 'var(--primary)'};">
                      ${sc}점 ${isSubFail ? '(과락)' : ''}
                    </span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
            <a href="/wrong-note" class="btn-cbt-action" style="padding: 12px 24px; font-size: 0.98rem;">
              📝 틀린 문제 오답노트에서 풀기
            </a>
            <button type="button" class="btn-cbt-nav" onclick="location.reload();" style="padding: 12px 22px;">
              🔄 다시 풀기
            </button>
            <a href="/" class="btn-cbt-nav" style="padding: 12px 22px;">
              🏠 홈으로
            </a>
          </div>

          <p style="font-size: 0.78rem; color: var(--text-subtle); margin-top: 24px;">
            ※ 본 결과는 모의 풀이이며, 실제 공식 합격 기준과 출제 기준은 반드시 Q-Net 공고를 확인하세요.
          </p>
        </div>
      `;
    }

    static start(options = {}) {
      const mountEl = typeof options.containerId === 'string' 
        ? document.getElementById(options.containerId) 
        : (options.mountEl || document.getElementById('cbt-mount'));
      
      const omrMountEl = typeof options.omrContainerId === 'string'
        ? document.getElementById(options.omrContainerId)
        : (options.omrMountEl || document.getElementById('omr-mount'));

      return new CBTEngine({
        mountEl: mountEl,
        omrMountEl: omrMountEl,
        questions: options.questions || [],
        mode: options.isPractice ? 'practice' : (options.mode || 'exam'),
        durationSeconds: (options.timeLimitMin || 0) * 60,
        onFinish: options.onFinish
      });
    }
  }

  global.CBTEngine = CBTEngine;
})(window);

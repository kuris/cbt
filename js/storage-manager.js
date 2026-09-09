/**
 * 전기기사 필기 준비 - 로컬 스토리지 & Supabase 클라우드 동기화 매니저
 */

(function (global) {
  'use strict';

  const STORAGE_LOGS_KEY = 'cbt_local_quiz_logs';
  const STORAGE_WRONG_KEY = 'cbt_local_wrong_notes';
  const STORAGE_FAVS_KEY = 'cbt_local_favorites';

  // 토스트 메시지
  function showToast(message) {
    let toast = document.getElementById('cbt-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cbt-toast';
      toast.className = 'cbt-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // 1. 퀴즈 풀이 결과 저장
  async function saveQuizResult(logData) {
    const item = {
      id: 'log_' + Date.now(),
      mode: logData.mode || 'practice',
      subject: logData.subject || '전과목',
      year: logData.year || null,
      round: logData.round || null,
      score: logData.score,
      total_questions: logData.total,
      correct_count: logData.correct,
      duration_seconds: logData.duration || 0,
      created_at: new Date().toISOString()
    };

    // 로컬 저장
    try {
      const logs = JSON.parse(localStorage.getItem(STORAGE_LOGS_KEY) || '[]');
      logs.unshift(item);
      localStorage.setItem(STORAGE_LOGS_KEY, JSON.stringify(logs.slice(0, 100)));
    } catch (_) {}

    // 클라우드 저장 (로그인 시)
    const auth = global.CGAuth;
    if (auth && auth.user && auth.client) {
      try {
        await auth.client.from('electric_quiz_logs').insert({
          user_id: auth.user.id,
          mode: item.mode,
          subject: item.subject,
          year: item.year,
          round: item.round,
          score: item.score,
          total_questions: item.total_questions,
          correct_count: item.correct_count,
          duration_seconds: item.duration_seconds
        });
      } catch (e) {
        console.warn('[CBT] Quiz log cloud sync failed:', e);
      }
    }
  }

  // 2. 오답노트 추가
  async function addWrongAnswer(q, selectedIdx) {
    const wrongItem = {
      id: 'wrong_' + q.id,
      question_id: q.id,
      subject: q.subject,
      subject_id: q.subject_id,
      question: q.question,
      choices: q.choices,
      selected_answer: selectedIdx,
      correct_answer: q.answer,
      explanation: q.explanation,
      is_resolved: false,
      created_at: new Date().toISOString()
    };

    // 로컬 저장 (중복 방지)
    try {
      let list = JSON.parse(localStorage.getItem(STORAGE_WRONG_KEY) || '[]');
      list = list.filter(w => w.question_id !== q.id);
      list.unshift(wrongItem);
      localStorage.setItem(STORAGE_WRONG_KEY, JSON.stringify(list.slice(0, 200)));
    } catch (_) {}

    // 클라우드 저장
    const auth = global.CGAuth;
    if (auth && auth.user && auth.client) {
      try {
        await auth.client.from('electric_wrong_answers').upsert({
          user_id: auth.user.id,
          question_id: q.id,
          subject: q.subject,
          selected_answer: selectedIdx,
          correct_answer: q.answer,
          is_resolved: false
        }, { onConflict: 'user_id,question_id' });
      } catch (e) {
        console.warn('[CBT] Wrong answer cloud sync failed:', e);
      }
    }
  }

  // 오답 해결(Resolved) 처리
  async function resolveWrongAnswer(qId) {
    try {
      const list = JSON.parse(localStorage.getItem(STORAGE_WRONG_KEY) || '[]');
      const target = list.find(w => w.question_id === qId);
      if (target) {
        target.is_resolved = true;
        target.resolved_at = new Date().toISOString();
        localStorage.setItem(STORAGE_WRONG_KEY, JSON.stringify(list));
      }
    } catch (_) {}

    const auth = global.CGAuth;
    if (auth && auth.user && auth.client) {
      try {
        await auth.client.from('electric_wrong_answers')
          .update({ is_resolved: true, resolved_at: new Date().toISOString() })
          .eq('user_id', auth.user.id)
          .eq('question_id', qId);
      } catch (_) {}
    }
    showToast('✨ 오답을 해결하여 복습 완료로 표시했습니다.');
  }

  // 오답 목록 가져오기
  function getWrongAnswers(subjectId = 'all') {
    try {
      const list = JSON.parse(localStorage.getItem(STORAGE_WRONG_KEY) || '[]');
      if (subjectId === 'all' || !subjectId) return list;
      return list.filter(w => w.subject_id === subjectId || w.subject === subjectId);
    } catch (_) {
      return [];
    }
  }

  // 3. 즐겨찾기 토글
  async function toggleFavorite(type, itemId, title) {
    let favs = [];
    try {
      favs = JSON.parse(localStorage.getItem(STORAGE_FAVS_KEY) || '[]');
    } catch (_) {}

    const existsIdx = favs.findIndex(f => f.item_type === type && f.item_id === itemId);
    let isFav = false;

    if (existsIdx >= 0) {
      favs.splice(existsIdx, 1);
      isFav = false;
      showToast('즐겨찾기에서 제거했습니다.');
    } else {
      favs.unshift({
        item_type: type,
        item_id: itemId,
        title: title,
        created_at: new Date().toISOString()
      });
      isFav = true;
      showToast('⭐ 즐겨찾기에 추가되었습니다.');
    }

    try {
      localStorage.setItem(STORAGE_FAVS_KEY, JSON.stringify(favs));
    } catch (_) {}

    // 클라우드 저장
    const auth = global.CGAuth;
    if (auth && auth.user && auth.client) {
      try {
        if (isFav) {
          await auth.client.from('electric_favorites').insert({
            user_id: auth.user.id,
            item_type: type,
            item_id: itemId,
            title: title
          });
        } else {
          await auth.client.from('electric_favorites').delete()
            .eq('user_id', auth.user.id)
            .eq('item_type', type)
            .eq('item_id', itemId);
        }
      } catch (_) {}
    }
    return isFav;
  }

  function isFavorite(type, itemId) {
    try {
      const favs = JSON.parse(localStorage.getItem(STORAGE_FAVS_KEY) || '[]');
      return favs.some(f => f.item_type === type && f.item_id === itemId);
    } catch (_) {
      return false;
    }
  }

  // 4. 대시보드 통계 지표 산출
  function getDashboardStats() {
    let logs = [];
    let wrongs = [];
    try {
      logs = JSON.parse(localStorage.getItem(STORAGE_LOGS_KEY) || '[]');
      wrongs = JSON.parse(localStorage.getItem(STORAGE_WRONG_KEY) || '[]');
    } catch (_) {}

    const todayStr = new Date().toISOString().slice(0, 10);
    const todayLogs = logs.filter(l => l.created_at && l.created_at.startsWith(todayStr));

    const totalQuestions = logs.reduce((acc, cur) => acc + (cur.total_questions || 0), 0);
    const totalCorrect = logs.reduce((acc, cur) => acc + (cur.correct_count || 0), 0);
    const todayQuestions = todayLogs.reduce((acc, cur) => acc + (cur.total_questions || 0), 0);

    const avgRate = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const unresolvedWrongs = wrongs.filter(w => !w.is_resolved).length;

    // 연속 출석 스트릭 계산
    const dates = [...new Set(logs.map(l => l.created_at ? l.created_at.slice(0, 10) : '').filter(Boolean))].sort().reverse();
    let streak = 0;
    if (dates.length > 0) {
      let checkDate = new Date();
      const todayISO = checkDate.toISOString().slice(0, 10);
      let currIdx = 0;
      if (dates[0] === todayISO) {
        streak++;
        currIdx = 1;
      }
      while (currIdx < dates.length) {
        checkDate.setDate(checkDate.getDate() - 1);
        const prevISO = checkDate.toISOString().slice(0, 10);
        if (dates[currIdx] === prevISO) {
          streak++;
          currIdx++;
        } else {
          break;
        }
      }
    }

    return {
      todayCount: todayQuestions,
      totalCount: totalQuestions,
      avgRate: avgRate,
      wrongCount: unresolvedWrongs,
      streak: streak,
      recentMode: logs[0] ? logs[0].mode : null
    };
  }

  // 로그인 감지 시 동기화
  if (global.CGAuth && typeof global.CGAuth.onChange === 'function') {
    global.CGAuth.onChange((detail) => {
      if (detail && detail.user) {
        // 로컬 데이터를 클라우드로 백필
        console.log('[CBT Storage] User session detected:', detail.user.email);
      }
    });
  }

  global.showToast = showToast;
  global.CBTStorage = {
    saveQuizResult,
    addWrongAnswer,
    resolveWrongAnswer,
    getWrongAnswers,
    toggleFavorite,
    isFavorite,
    getStats: getDashboardStats
  };
})(window);

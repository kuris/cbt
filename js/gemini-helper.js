/**
 * 전기기사 필기 준비 - AI 비전공자 쉬운 설명 & 원클릭 연동 모듈 (gemini-helper.js)
 * 1. 화면 내 즉시 쉬운 풀이 열람 (복사/붙여넣기 전혀 불필요)
 * 2. ChatGPT 자동 입력 연동 (chatgpt.com/?q=...) - 질문 100% 자동 채움
 * 3. Gemini 클립보드 복사 후 열기 (gemini.google.com/app)
 * 4. Google AI 검색 자동 완성 (google.com/search?q=...)
 */

(function (global) {
  'use strict';

  function createBeginnerPrompt(q) {
    const choicesText = (q.choices || [])
      .map((c, i) => `  ${i + 1}) ${c}`)
      .join('\n');

    const ansNum = (typeof q.answer === 'number') ? q.answer + 1 : q.answer;
    const ansText = (q.choices && typeof q.answer === 'number' && q.choices[q.answer]) 
      ? q.choices[q.answer] 
      : '';

    return `[전기기사 필기 수험생 - 비전공자 눈높이 쉬운 설명 요청]

안녕하세요! 저는 전기 비전공자로서 전기기사 필기 시험을 독학하고 있는데, 아래 문제의 정답 도출 과정과 원리가 잘 이해되지 않습니다.
어려운 전공 전문 용어나 복잡한 수식 생략 없이, 비전공자도 단번에 이해할 수 있도록 일상 비유와 단계별 계산 과정으로 아주 쉽게 설명해 주세요!

■ 시험 과목: ${q.subject || '전기기사 필기'}
■ 출제 문제:
${q.question || ''}

■ 보기:
${choicesText}

■ 정답: ${ansNum}번${ansText ? ` (${ansText})` : ''}
■ 기본 해설:
${q.explanation || '해설 요약 참조'}

--------------------------------------------------
[요청 사항 - 비전공자 맞춤 가이드]
1. [초보자 눈높이 쉬운 비유]: 일상생활의 비유(물 배관, 도로 교통 등)를 들어 이 공식이나 현상의 핵심 원리를 쉽게 설명해 주세요.
2. [단계별 수식 계산]: 사용되는 공식의 각 기호(V, I, R, L, C 등)가 무엇인지 하나씩 짚어주시고, 문제의 숫자가 어떻게 대입되는지 중학생도 따라할 수 있게 1단계, 2단계로 계산 과정을 보여주세요.
3. [오답 보기 분석]: 다른 보기들은 왜 틀렸는지 핵심 이유를 1줄씩 간단히 알려주세요.
4. [시험장 10초 암기 팁]: 실제 시험장에서 비슷한 문제를 만났을 때 바로 정답을 맞출 수 있는 꿀팁이나 공식 암기법을 알려주세요.`;
  }

  // 비전공자 눈높이 쉬운 개념 생성 (화면 내 즉시 표시용)
  function getInlineBeginnerInsight(q) {
    const ansNum = (typeof q.answer === 'number') ? q.answer + 1 : q.answer;
    const ansText = (q.choices && typeof q.answer === 'number' && q.choices[q.answer]) 
      ? q.choices[q.answer] 
      : '';

    return `
      <div class="inline-beginner-box">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
          <span style="font-size: 1.2rem;">💡</span>
          <strong style="color: #4338CA; font-size: 0.95rem;">비전공자 3초 쉬운 이해 가이드</strong>
          <span class="badge" style="background: #EEF2FF; color: #4338CA; font-size: 0.72rem; margin-left: auto;">복붙 없이 바로보기</span>
        </div>

        <div style="font-size: 0.88rem; line-height: 1.6; color: #1E293B;">
          <div style="margin-bottom: 8px;">
            <span style="font-weight: 700; color: #059669;">[핵심 결론]</span>
            정답은 <b>${ansNum}번 (${ansText})</b>입니다.
          </div>
          <div style="margin-bottom: 8px;">
            <span style="font-weight: 700; color: #2563EB;">[비전공자 쉬운 비유]</span>
            ${q.explanation || '원리를 단계별로 적용하면 명확히 풀리는 유형입니다.'}
          </div>
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 10px 12px; border-radius: 6px; margin-top: 8px;">
            <strong style="color: #D97706; font-size: 0.82rem; display: block; margin-bottom: 2px;">⚡ 시험장 10초 암기 꿀팁</strong>
            <span style="font-size: 0.82rem; color: #475569;">
              이 유형은 지문 속 키워드(<b>${q.chapter || q.subject}</b> 관련)와 정답 보기의 비례·반비례 관계를 공식과 1:1로 매칭하여 외우면 실전에서 5초 만에 풀 수 있습니다.
            </span>
          </div>
        </div>
      </div>
    `;
  }

  function showToast(message, icon = '✨') {
    let toast = document.getElementById('gemini-toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'gemini-toast-notice';
      toast.className = 'gemini-toast';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 1.3rem;">${icon}</span>
        <div style="font-size: 0.88rem; line-height: 1.45;">
          ${message}
        </div>
      </div>
    `;

    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // 1. ChatGPT로 질문 (URL에 질문이 100% 자동 채워짐 - 복붙 필요 없음!)
  function askChatGPT(q) {
    if (!q) return;
    const prompt = createBeginnerPrompt(q);
    const url = 'https://chatgpt.com/?q=' + encodeURIComponent(prompt);
    showToast('ChatGPT 창이 열리며 질문이 <b>자동 입력</b>됩니다!', '🤖');
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // 2. Google AI 검색으로 질문 (100% 자동 입력)
  function askGoogleAI(q) {
    if (!q) return;
    const query = `${q.subject || '전기기사'} "${q.question ? q.question.slice(0, 45) : ''}" 풀이 해설`;
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    showToast('구글 검색으로 이동하여 <b>AI 해설 요약</b>을 바로 확인합니다!', '🔍');
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // 3. Google Gemini로 질문 (클립보드 자동 복사 + 열기)
  function askGemini(questionData) {
    if (!questionData) return;
    const prompt = createBeginnerPrompt(questionData);

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(prompt).then(() => {
        showToast(`
          <strong style="color: #60A5FA; display: block; margin-bottom: 2px;">질문이 복사되었습니다!</strong>
          제미나이 창에서 <b>붙여넣기(Ctrl+V)</b> 하세요. (※ 자동입력은 ChatGPT 버튼 추천)
        `, '✨');
      }).catch(() => {
        showToast('제미나이 웹으로 이동합니다!', '✨');
      });
    }

    setTimeout(() => {
      window.open('https://gemini.google.com/app', '_blank', 'noopener,noreferrer');
    }, 300);
  }

  // 4. 공식 질문
  function askGeminiForFormula(formulaData) {
    if (!formulaData) return;
    const prompt = `[전기기사 필기 - 비전공자 필수 공식 쉬운 설명 요청]
공식: ${formulaData.title} (${formulaData.formula})
단위 및 의미: ${formulaData.unit} / ${formulaData.meaning}
비전공자가 이해하기 쉬운 비유와 실전 계산 예제를 단계별로 설명해 주세요!`;

    // ChatGPT 자동입력 링크 지원
    const chatGptUrl = 'https://chatgpt.com/?q=' + encodeURIComponent(prompt);
    window.open(chatGptUrl, '_blank', 'noopener,noreferrer');
    showToast('ChatGPT 창에서 공식 쉬운 설명이 <b>자동 시작</b>됩니다!', '🧮');
  }

  // 화면 내 즉시 토글
  function toggleInlineExplanation(btnEl, q) {
    if (!btnEl) return;
    const parent = btnEl.closest('.explanation-box') || btnEl.parentElement;
    let target = parent.querySelector('.inline-beginner-mount');
    if (!target) {
      target = document.createElement('div');
      target.className = 'inline-beginner-mount';
      parent.appendChild(target);
    }

    if (target.style.display === 'block') {
      target.style.display = 'none';
      btnEl.innerHTML = '<span class="gemini-sparkle">💡</span> 쉬운 설명 바로보기 (복붙X)';
    } else {
      target.innerHTML = getInlineBeginnerInsight(q);
      target.style.display = 'block';
      btnEl.innerHTML = '<span class="gemini-sparkle">▲</span> 쉬운 설명 접기';
    }
  }

  global.CBTGemini = {
    createPrompt: createBeginnerPrompt,
    askQuestion: askGemini,
    askChatGPT: askChatGPT,
    askGoogleAI: askGoogleAI,
    askFormula: askGeminiForFormula,
    toggleInline: toggleInlineExplanation,
    showToast: showToast
  };

})(window);


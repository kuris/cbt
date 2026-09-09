/**
 * 전기기사 필기 준비 - 제미나이(Gemini) AI 비전공자 눈높이 쉬운 설명 연동 모듈 (gemini-helper.js)
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
    }, 4500);
  }

  function askGemini(questionData) {
    if (!questionData) return;

    const prompt = createBeginnerPrompt(questionData);

    // 1. 클립보드에 프롬프트 복사
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(prompt).then(() => {
        showToast(`
          <strong style="color: #60A5FA; display: block; margin-bottom: 2px;">비전공자 맞춤 질문이 클립보드에 복사되었습니다!</strong>
          제미나이(Gemini) 웹 채팅창에 바로 <b>붙여넣기(Ctrl+V / Cmd+V)</b> 하세요.
        `, '🤖');
      }).catch(() => {
        showToast('제미나이 웹으로 이동합니다. 채팅창에 질문해 보세요!', '🤖');
      });
    } else {
      // 레거시 fallback
      try {
        const ta = document.createElement('textarea');
        ta.value = prompt;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast(`
          <strong style="color: #60A5FA; display: block; margin-bottom: 2px;">비전공자 맞춤 질문이 복사되었습니다!</strong>
          제미나이(Gemini) 창에 <b>붙여넣기(Ctrl+V)</b> 하세요.
        `, '🤖');
      } catch (e) {
        showToast('제미나이 웹으로 이동합니다!', '🤖');
      }
    }

    // 2. 새 탭으로 Google Gemini 공식 웹사이트 열기
    setTimeout(() => {
      window.open('https://gemini.google.com/app', '_blank', 'noopener,noreferrer');
    }, 400);
  }

  function askGeminiForFormula(formulaData) {
    if (!formulaData) return;

    const prompt = `[전기기사 필기 - 비전공자 필수 공식 쉬운 설명 요청]

안녕하세요! 저는 전기 비전공자 수험생입니다. 아래 공식의 유도 과정과 실전 시험 출제 원리가 이해하기 어렵습니다.
비전공자 눈높이에서 일상 비유와 함께 쉽게 풀어서 설명해 주세요!

■ 공식명: ${formulaData.title} (${formulaData.subject})
■ 주요 공식: ${formulaData.formula}
■ 단위 및 설명: ${formulaData.unit || ''} / ${formulaData.meaning || ''}
${formulaData.caution ? `■ 주의사항: ${formulaData.caution}` : ''}

[요청 사항]
1. 비전공자도 바로 이해되는 쉬운 개념 비유
2. 시험 문제에서 어떤 키워드가 나오면 이 공식을 써야 하는지 판단 기준
3. 숫자를 대입하여 계산하는 대표적인 예제 문제 1개와 단계별 풀이
4. 잊어버리지 않는 10초 암기 꿀팁`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(prompt).then(() => {
        showToast(`
          <strong style="color: #60A5FA; display: block; margin-bottom: 2px;">공식 질문이 클립보드에 복사되었습니다!</strong>
          제미나이(Gemini) 웹 채팅창에 <b>붙여넣기(Ctrl+V)</b> 하세요.
        `, '🧮');
      }).catch(() => {
        showToast('제미나이 웹으로 이동합니다!', '🧮');
      });
    }

    setTimeout(() => {
      window.open('https://gemini.google.com/app', '_blank', 'noopener,noreferrer');
    }, 400);
  }

  // 글로벌 등록
  global.CBTGemini = {
    createPrompt: createBeginnerPrompt,
    askQuestion: askGemini,
    askFormula: askGeminiForFormula,
    showToast: showToast
  };

})(window);

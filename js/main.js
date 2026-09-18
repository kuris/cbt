/**
 * 전기기사 필기 준비 - 메인 대시보드 스크립트 (main.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. 패밀리 사이트 드롭다운 토글 (cg-family.js 가 자체 처리 — 구 바인딩 제거됨)

  // 2. 대시보드 통계 지표 렌더링
  renderDashboardStats();

  // 3. 5개 과목 진도 카드 렌더링
  renderSubjectCards();

  // 4. 공식 카드 미리보기 렌더링
  renderFormulaPreviews();
});

function renderDashboardStats() {
  if (!window.CBTStorage) return;
  const stats = window.CBTStorage.getStats();

  const elToday = document.getElementById('stat-today-solved');
  const elRate = document.getElementById('stat-avg-rate');
  const elWrongs = document.getElementById('stat-wrong-count');
  const elTotal = document.getElementById('stat-total-solved');

  if (elToday) elToday.textContent = `${stats.todayCount}개`;
  if (elRate) elRate.textContent = `${stats.avgRate}%`;
  if (elWrongs) elWrongs.textContent = `${stats.wrongCount}개`;
  if (elTotal) elTotal.textContent = `${stats.totalCount}개`;
}

function renderSubjectCards() {
  const mount = document.getElementById('subjects-card-mount');
  if (!mount || !window.ELECTRIC_DATA) return;

  const subjects = window.ELECTRIC_DATA.subjects;
  mount.innerHTML = subjects.map(s => {
    return `
      <div class="subject-card">
        <div>
          <div class="subject-card-top">
            <div class="subject-icon-box" style="background: ${s.color}15; color: ${s.color};">
              ${s.icon}
            </div>
            <div>
              <div class="subject-name">${s.name}</div>
              <span style="font-size: 0.75rem; color: var(--text-subtle); font-weight: 600;">단원 5개 · 필수 기출</span>
            </div>
          </div>
          <p class="subject-desc">${s.desc}</p>
        </div>
        <div class="subject-footer">
          <a href="/subjects?id=${s.id}" style="color: ${s.color};">개념 요약보기 →</a>
          <a href="/past-exams?sub=${s.id}" style="font-size: 0.78rem; color: var(--text-muted);">문제풀기</a>
        </div>
      </div>
    `;
  }).join('');
}

function renderFormulaPreviews() {
  const mount = document.getElementById('formula-preview-mount');
  if (!mount || !window.ELECTRIC_DATA) return;

  const sampleFormulas = window.ELECTRIC_DATA.formulas.slice(0, 4);
  mount.innerHTML = sampleFormulas.map(f => {
    return `
      <div class="flip-card" onclick="this.classList.toggle('flipped')">
        <div class="flip-card-inner">
          <!-- 앞면 -->
          <div class="flip-card-front">
            <span class="flip-subject-badge">${f.subject}</span>
            <div style="margin: auto 0;">
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px;">${f.title}</h4>
              <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">${f.front}</p>
            </div>
            <span class="flip-hint-text">👆 카드를 탭하여 공식 확인</span>
          </div>

          <!-- 뒷면 -->
          <div class="flip-card-back">
            <span class="flip-subject-badge">${f.subject}</span>
            <div style="margin: auto 0;">
              <div class="formula-display-box">${f.formula}</div>
              <p style="font-size: 0.82rem; color: #E2E8F0; line-height: 1.45;">${f.meaning}</p>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: auto; padding-top: 6px; border-top: 1px solid rgba(255,255,255,0.15);">
              <span style="font-size: 0.74rem; color: var(--accent-cyan); font-weight: 600;">단위: ${f.unit}</span>
              <button type="button" class="btn-gemini-ask btn-gemini-ask-sm" onclick="event.stopPropagation(); if(window.CBTGemini) window.CBTGemini.askFormula(window.ELECTRIC_DATA.formulas.find(item => item.id === '${f.id}'))" style="padding: 3px 8px; font-size: 0.72rem;">
                <span class="gemini-sparkle">✨</span>
                <span>제미나이 설명</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}


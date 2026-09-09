/**
 * 전기기사 필기 준비 - 문제 오류 신고 모달
 */

(function (global) {
  'use strict';

  let currentQuestion = null;

  function initModal() {
    if (document.getElementById('cbt-report-modal')) return;

    const overlay = document.createElement('div');
    overlay.id = 'cbt-report-modal';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <div class="modal-title">🚨 문제 오류 신고</div>
          <button type="button" class="btn-close-modal" id="report-modal-close" style="font-size: 1.2rem; color: var(--text-muted);">✕</button>
        </div>
        <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 16px;">
          오탈자, 정답 오류, 잘못된 해설을 알려주시면 검토 후 즉시 수정하겠습니다.
        </p>

        <form id="cbt-report-form">
          <div class="form-group">
            <label class="form-label">대상 문항</label>
            <input type="text" id="report-target-title" readonly style="width: 100%; padding: 8px 12px; background: var(--bg-subtle); border: 1px solid var(--border); border-radius: var(--radius-xs); font-size: 0.85rem; color: var(--text-main);">
          </div>

          <div class="form-group">
            <label class="form-label" for="report-type-select">오류 유형</label>
            <select id="report-type-select" class="form-select" required>
              <option value="answer">정답 오류 (실제 정답이 다름)</option>
              <option value="explanation">해설 오류 또는 오해 소지</option>
              <option value="typo">문제 지문 / 보기 오타</option>
              <option value="diagram">수식 또는 다이어그램 오류</option>
              <option value="other">기타 문의 / 개선 제안</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="report-msg-text">상세 내용</label>
            <textarea id="report-msg-text" class="form-textarea" placeholder="오류가 있는 부분과 올바른 내용이나 근거를 간략히 적어주세요." required></textarea>
          </div>

          <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px;">
            <button type="button" class="btn-cbt-nav" id="report-cancel-btn">취소</button>
            <button type="submit" class="btn-cbt-action" style="padding: 10px 20px;">신고 제출</button>
          </div>
        </form>
      </div>
    `;

    document.body.appendChild(overlay);

    const closeBtn = document.getElementById('report-modal-close');
    const cancelBtn = document.getElementById('report-cancel-btn');
    const form = document.getElementById('cbt-report-form');

    const closeModal = () => { overlay.classList.remove('show'); };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const type = document.getElementById('report-type-select').value;
        const msg = document.getElementById('report-msg-text').value.trim();

        if (!msg) return;

        await submitReport(type, msg);
        closeModal();
        form.reset();
      });
    }
  }

  function openReportModal(question) {
    initModal();
    currentQuestion = question;
    const targetInput = document.getElementById('report-target-title');
    if (targetInput && question) {
      targetInput.value = `[${question.subject || '공통'}] ${question.question.slice(0, 36)}... (ID: ${question.id})`;
    }
    const overlay = document.getElementById('cbt-report-modal');
    if (overlay) overlay.classList.add('show');
  }

  async function submitReport(type, message) {
    if (!currentQuestion) return;

    const reportItem = {
      id: 'rep_' + Date.now(),
      question_id: currentQuestion.id,
      report_type: type,
      message: message,
      status: 'pending',
      created_at: new Date().toISOString()
    };

    // 1. 로컬 저장 (관리자 및 백업용)
    try {
      const list = JSON.parse(localStorage.getItem('cbt_error_reports') || '[]');
      list.unshift(reportItem);
      localStorage.setItem('cbt_error_reports', JSON.stringify(list.slice(0, 100)));
    } catch (_) {}

    // 2. Supabase 저장
    const auth = global.CGAuth;
    if (auth && auth.client) {
      try {
        await auth.client.from('electric_error_reports').insert({
          user_id: auth.user ? auth.user.id : null,
          question_id: currentQuestion.id,
          report_type: type,
          message: message,
          status: 'pending'
        });
      } catch (e) {
        console.warn('[Report] Cloud insert failed, saved locally:', e);
      }
    }

    if (global.showToast) {
      global.showToast('🙏 소중한 신고가 접수되었습니다. 검토 후 신속히 반영하겠습니다.');
    }
  }

  global.CBTReport = {
    open: openReportModal
  };
})(window);

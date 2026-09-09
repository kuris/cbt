/* ============================================================
   CBT Auth Guard - 소유자 전용 비공개 접근 제어 모듈
   ------------------------------------------------------------
   소유자(phiskim@gmail.com)만 사이트 전체 기능을 이용할 수 있도록
   첫 진입 시 전체 화면 Google 로그인 게이트를 강제합니다.
   ============================================================ */

(function (window, document) {
  'use strict';

  var OWNER_EMAILS = ['phiskim@gmail.com'];
  var STORAGE_KEYS = ['cbt_auth_token', 'sb-ybhiznlelnpwaicyoifa-auth-token'];
  var SESSION_KEY = 'cbt_owner_verified';

  // 로컬 캐시에서 유저 정보 확인
  function peekUser() {
    for (var i = 0; i < STORAGE_KEYS.length; i++) {
      try {
        var raw = localStorage.getItem(STORAGE_KEYS[i]);
        if (!raw) continue;
        var data = JSON.parse(raw);
        var u = data.user || (data.currentSession && data.currentSession.user) || null;
        if (u && u.id) return u;
      } catch (e) {}
    }
    return null;
  }

  function isOwnerUser(user) {
    if (!user || !user.email) return false;
    var email = user.email.toLowerCase().trim();
    return OWNER_EMAILS.indexOf(email) !== -1;
  }

  function isLocalEnv() {
    var h = location.hostname;
    return h === 'localhost' || h === '127.0.0.1' || h === '' || h.endsWith('.local');
  }

  // 즉시 화면 잠금
  function lock() {
    if (document.documentElement) document.documentElement.classList.add('cbt-locked');
    if (document.body) document.body.classList.add('cbt-locked');
  }

  // 화면 잠금 해제
  function unlock() {
    sessionStorage.setItem(SESSION_KEY, 'true');
    if (document.documentElement) document.documentElement.classList.remove('cbt-locked');
    if (document.body) document.body.classList.remove('cbt-locked');

    var gate = document.getElementById('cbt-auth-gate');
    if (gate) {
      gate.classList.add('cbt-gate-hidden');
      setTimeout(function () {
        if (gate && gate.parentNode) gate.parentNode.removeChild(gate);
      }, 400);
    }
  }

  // 게이트 DOM 생성 및 주입
  function ensureGateModal() {
    var gate = document.getElementById('cbt-auth-gate');
    if (gate) return gate;

    gate = document.createElement('div');
    gate.id = 'cbt-auth-gate';
    gate.innerHTML = '<div class="cbt-gate-modal" id="cbt-gate-modal-inner"></div>';
    var target = document.body || document.documentElement;
    if (target) {
      target.appendChild(gate);
    }
    return gate;
  }

  // 게이트 내용 렌더링 (로그인 요청)
  function renderLoginPrompt() {
    lock();
    ensureGateModal();
    var inner = document.getElementById('cbt-gate-modal-inner');
    if (!inner) return;

    var devBypassHtml = isLocalEnv()
      ? '<button type="button" class="cbt-gate-btn-outline" id="cbt-dev-bypass" style="margin-top:12px; border-color:#3B82F6; color:#93C5FD;">🛠️ 로컬 개발 테스트 통과 (phiskim@gmail.com 모의)</button>'
      : '';

    inner.innerHTML = [
      '<div class="cbt-gate-badge">🔒 PRIVATE CBT SYSTEM</div>',
      '<h1 class="cbt-gate-title">전기기사 필기 준비 CBT</h1>',
      '<p class="cbt-gate-desc">본 사이트는 소유자 전용 비공개 개인 수험 학습 공간입니다.<br>소유자 Google 계정으로 로그인해 주세요.</p>',
      '<div class="cbt-gate-features">',
      '  <div class="cbt-gate-feat-item"><span>⚡</span> 10개년 기출 3,400제 전 문항 CBT & 해설</div>',
      '  <div class="cbt-gate-feat-item"><span>📘</span> 2025 개정판 이론치트키 & 린치핀에듀 연계</div>',
      '  <div class="cbt-gate-feat-item"><span>💡</span> 비전공자 전용 초간단 AI 해설 & 오답노트</div>',
      '</div>',
      '<button type="button" class="cbt-gate-btn-google" id="cbt-btn-google-login">',
      '  <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>',
      '  <span>Google 계정으로 로그인</span>',
      '</button>',
      devBypassHtml,
      '<div class="cbt-gate-footer">승인된 소유자 계정(phiskim@gmail.com)만 접근 가능합니다.</div>'
    ].join('');

    var loginBtn = document.getElementById('cbt-btn-google-login');
    if (loginBtn) {
      loginBtn.addEventListener('click', function () {
        if (window.CGAuth && typeof window.CGAuth.signInWithGoogle === 'function') {
          window.CGAuth.signInWithGoogle();
        } else if (window.sb && window.sb.auth) {
          window.sb.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: location.href, queryParams: { prompt: 'select_account' } }
          });
        } else {
          alert('로그인 모듈을 준비하는 중입니다. 잠시 후 다시 클릭해 주세요.');
        }
      });
    }

    var devBtn = document.getElementById('cbt-dev-bypass');
    if (devBtn) {
      devBtn.addEventListener('click', function () {
        unlock();
      });
    }
  }

  // 게이트 내용 렌더링 (권한 없음)
  function renderUnauthorized(email) {
    lock();
    ensureGateModal();
    var inner = document.getElementById('cbt-gate-modal-inner');
    if (!inner) return;

    inner.innerHTML = [
      '<div class="cbt-gate-badge" style="background:rgba(239,68,68,0.2); border-color:rgba(239,68,68,0.4); color:#FCA5A5;">⛔ 접근 권한 없음</div>',
      '<h1 class="cbt-gate-title">비공개 수험 시스템</h1>',
      '<p class="cbt-gate-desc">현재 로그인된 계정: <strong style="color:#F1F5F9;">' + (email || '미확인') + '</strong><br><br>본 서비스는 소유자(<strong>phiskim@gmail.com</strong>) 전용 비공개 학습 공간입니다.<br>소유자 계정으로 다시 로그인해 주세요.</p>',
      '<button type="button" class="cbt-gate-btn-google" id="cbt-btn-switch-account">',
      '  <span>다른 Google 계정으로 로그인</span>',
      '</button>',
      '<button type="button" class="cbt-gate-btn-outline" id="cbt-btn-gate-signout">',
      '  <span>로그아웃</span>',
      '</button>'
    ].join('');

    var switchBtn = document.getElementById('cbt-btn-switch-account');
    if (switchBtn) {
      switchBtn.addEventListener('click', function () {
        if (window.CGAuth && typeof window.CGAuth.signInWithGoogle === 'function') {
          window.CGAuth.signInWithGoogle();
        } else if (window.sb && window.sb.auth) {
          window.sb.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: location.href, queryParams: { prompt: 'select_account' } }
          });
        }
      });
    }

    var signoutBtn = document.getElementById('cbt-btn-gate-signout');
    if (signoutBtn) {
      signoutBtn.addEventListener('click', function () {
        if (window.CGAuth && typeof window.CGAuth.signOut === 'function') {
          window.CGAuth.signOut().then(function () {
            renderLoginPrompt();
          });
        } else {
          STORAGE_KEYS.forEach(function (k) { localStorage.removeItem(k); });
          sessionStorage.removeItem(SESSION_KEY);
          location.reload();
        }
      });
    }
  }

  // 인증 상태 최종 검사
  function checkAuth() {
    // 1. 이미 같은 세션에서 인증 확인 완료되었는지 검사
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      var cached = peekUser();
      if (cached && isOwnerUser(cached)) {
        unlock();
        return;
      }
      if (isLocalEnv()) {
        unlock();
        return;
      }
    }

    if (isLocalEnv() && location.search.indexOf('dev_unlock=1') !== -1) {
      unlock();
      return;
    }

    // 2. 즉시 로컬 캐시 유저 검사하여 게이트 상태 표시
    var localUser = peekUser();
    if (localUser) {
      if (isOwnerUser(localUser)) {
        unlock();
        return;
      } else {
        renderUnauthorized(localUser.email);
      }
    } else {
      renderLoginPrompt();
    }

    // 3. CGAuth 또는 window.sb 준비 완료 시 최종 세션 검증
    function verifyWithActiveClient() {
      if (window.CGAuth && typeof window.CGAuth.ready === 'function') {
        window.CGAuth.ready().then(function () {
          var user = window.CGAuth.getUser();
          if (isOwnerUser(user)) {
            unlock();
          } else if (user) {
            renderUnauthorized(user.email);
          } else {
            renderLoginPrompt();
          }
        });
        return true;
      } else if (window.sb && window.sb.auth) {
        window.sb.auth.getSession().then(function (res) {
          var user = (res && res.data && res.data.session && res.data.session.user) || null;
          if (isOwnerUser(user)) {
            unlock();
          } else if (user) {
            renderUnauthorized(user.email);
          } else {
            renderLoginPrompt();
          }
        }).catch(function () {
          renderLoginPrompt();
        });
        return true;
      }
      return false;
    }

    if (!verifyWithActiveClient()) {
      var elapsed = 0;
      var pollTimer = setInterval(function () {
        elapsed += 80;
        if (verifyWithActiveClient() || elapsed >= 3000) {
          clearInterval(pollTimer);
        }
      }, 80);
    }
  }

  // 초기 실행: HTML 파싱 즉시 잠금
  var initUser = peekUser();
  if (!initUser || !isOwnerUser(initUser)) {
    lock();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAuth);
  } else {
    checkAuth();
  }

  // 전역 export
  window.CBTAuthGuard = {
    check: checkAuth,
    unlock: unlock,
    lock: lock,
    isOwner: function () {
      var u = (window.CGAuth && window.CGAuth.getUser()) || peekUser();
      return isOwnerUser(u);
    }
  };
})(window, document);

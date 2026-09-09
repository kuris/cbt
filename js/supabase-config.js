/* ============================================================
   전기기사 필기 준비 - Supabase 접속 설정 (supabase-config.js)
   - cbt.chatgpts.kr 인증 및 데이터 동기화용
   ============================================================ */

(function () {
  if (typeof window === 'undefined') return;
  window.SUPABASE_URL = 'https://ybhiznlelnpwaicyoifa.supabase.co';
  window.SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_H4gFRiLEjE8h8s_EX4tKzg__ZKpsBR1';
  window.SUPABASE_AUTH_STORAGE_KEY = 'cbt_auth_token';

  if (window.supabase && typeof window.supabase.createClient === 'function') {
    try {
      window.sb = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_PUBLISHABLE_KEY, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          storageKey: window.SUPABASE_AUTH_STORAGE_KEY
        }
      });
    } catch (e) {
      console.warn('[supabase-config] Failed to init window.sb', e);
    }
  }
})();

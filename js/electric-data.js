/**
 * 전기기사 필기 준비 - 5개 과목 메타데이터, 단원 개념 및 공식 암기 카드 데이터셋
 */

(function (global) {
  'use strict';

  // 1. 5개 시험 과목 정보
  const SUBJECTS = [
    {
      id: 'em',
      key: 'electromagnetics',
      name: '전기자기학',
      icon: '🧲',
      color: '#2563EB',
      pdf_file: '/theory/01_전기자기학_핵심이론치트키.pdf',
      pdf_title: '전기자기학 핵심이론 치트키 (46P)',
      desc: '쿨롱의 법칙, 전계와 전위, 가우스 법칙, 유전체, 자기장 및 전자유도 현상의 원리',
      chapters: [
        { title: '쿨롱의 법칙과 전계', summary: '두 점전하 사이 작용하는 힘(F)과 단위 전하가 받는 힘(E)' },
        { title: '전위와 가우스 정리', summary: '전하 집합체에 의한 전위 계산 및 폐곡면을 통과하는 전기력선속' },
        { title: '도체계와 정전용량', summary: '도체의 전위계수, 정전용량 C = Q/V 및 정전에너지' },
        { title: '유전체와 분극', summary: '유전율, 분극의 세기 P = ε₀(εr - 1)E 및 경계조건' },
        { title: '자기장과 자성체', summary: '비오-사바르 법칙, 암페어의 주회적분 법칙 및 자기 인덕턴스' }
      ]
    },
    {
      id: 'pe',
      key: 'power_engineering',
      name: '전력공학',
      icon: '⚡',
      color: '#0284C7',
      pdf_file: '/theory/02_전력공학_핵심이론치트키.pdf',
      pdf_title: '전력공학 핵심이론 치트키 (38P)',
      desc: '송배전 선로 특성, 전력 손실, 고장 계산, 이상전압 방호 및 발전 공학 기초',
      chapters: [
        { title: '송전선로의 특성', summary: '선로정수(R, L, C, G), 복도체 방식의 인덕턴스 감소 및 코로나 방지' },
        { title: '전선로와 가공전선', summary: '전선의 이도(dip) 계산, 지지물 하중 및 전압강하율 계산' },
        { title: '고장 계산과 안정도', summary: '대칭좌표법(영상/정상/역상분), 단락전류 및 차단기 정격용량' },
        { title: '이상전압과 방호', summary: '피뢰기(LA) 제한전압, 가공지선 차폐각 및 중성점 접지방식' },
        { title: '배전 방식과 수력/화력', summary: '가지식(수지식)과 환상식, 부하율, 수용률, 부등률 계산' }
      ]
    },
    {
      id: 'emach',
      key: 'electric_machines',
      name: '전기기기',
      icon: '⚙️',
      color: '#7C3AED',
      pdf_file: '/theory/03_전기기기_핵심이론치트키.pdf',
      pdf_title: '전기기기 핵심이론 치트키 (44P)',
      desc: '직류기, 동기기, 변압기, 유도전동기, 정류기의 원리와 특성 곡선',
      chapters: [
        { title: '직류발전기 및 전동기', summary: '유기기전력 E = (pZ/60a)ΦN, 직류기 전기자 권선법 및 토크 특성' },
        { title: '동기발전기 및 전동기', summary: '동기속도 Ns = 120f/p, 단락비 Ks, 전기자 반작용 및 V곡선' },
        { title: '변압기', summary: '권수비 a = V1/V2, 변압기 등가회로, 전일효율 및 병렬운전 조건' },
        { title: '유도전동기', summary: '슬립 s = (Ns - N)/Ns, 비례추이, 기동법(와이델타, 기동보상기법)' },
        { title: '정류기 및 전력전자', summary: '다이오드 및 사이리스터(SCR) 정류회로, 맥동률 계산' }
      ]
    },
    {
      id: 'cc',
      key: 'circuit_control',
      name: '회로이론 및 제어공학',
      icon: '🔬',
      color: '#059669',
      pdf_file: '/theory/04_회로이론및제어공학_핵심이론치트키.pdf',
      pdf_title: '회로이론 및 제어공학 치트키 (50P)',
      desc: '옴의 법칙, 키르히호프, 교류 RLC 회로, 4단자망, 라플라스 변환, 전달함수, 안정도 판별',
      chapters: [
        { title: '직류회로 및 교류기초', summary: '키르히호프 법칙, 휘트스톤 브리지, 순시값/실효값/평균값 관계' },
        { title: 'RLC 공진 및 교류전력', summary: '직·병렬 공진주파수 fo = 1/(2π√LC), 유효/무효/피상전력과 역률' },
        { title: '대칭 3상 교류 및 4단자망', summary: 'Y-Δ 변환, 3상 전력 P = √3 VI cosθ, 4단자 정수 AD - BC = 1' },
        { title: '라플라스 변환 및 과도현상', summary: '미분·적분의 라플라스 변환, RL/RC 회로의 시정수(Time Constant)' },
        { title: '자동제어계와 안정도', summary: '블록선도와 메이슨 공식, 루스-후르비츠 판별법, 보드선도 이득여유' }
      ]
    },
    {
      id: 'er',
      key: 'electrical_regulations',
      name: '전기설비기술기준',
      icon: '📐',
      color: '#D97706',
      pdf_file: '/theory/05_전기설비기술기준_KEC_핵심이론치트키.pdf',
      pdf_title: '전기설비기술기준 KEC 치트키 (28P)',
      desc: '한국전기설비규정(KEC), 접지 시스템, 절연 저항, 전선로 이격거리 및 보호장치 설치 기준',
      chapters: [
        { title: '총칙 및 전압의 구분', summary: '저압(AC 1000V 이하, DC 1500V 이하), 고압, 특고압 구분' },
        { title: '전로의 절연 및 접지설계', summary: 'KEC 계통접지(TN, TT, IT), 감전보호 및 통합/공통접지' },
        { title: '가공전선로 및 이격거리', summary: '저·고압 가공전선의 굵기, 지표상 높이 및 도로/철도 횡단 규정' },
        { title: '옥내배선공사', summary: '금속관, 합성수지관, 케이블트레이 공사의 시공 기준과 허용전류' },
        { title: '발변전소 및 보호장치', summary: '변압기 내부고장 보호계전기, 피뢰기 설치장소 및 접지저항' }
      ]
    }
  ];

  // 2. 공식 암기 카드 데이터셋
  const FORMULAS = [
    {
      id: 'f_em_01',
      subject_id: 'em',
      subject: '전기자기학',
      title: '쿨롱의 법칙 (정전기력)',
      front: '진공 중에서 두 점전하 q₁, q₂ 사이에 작용하는 정전기력 F는?',
      formula: 'F = (1 / 4πε₀) · (q₁q₂ / r²) [N]',
      meaning: '두 전하의 곱에 비례하고 거리 r의 제곱에 반비례합니다. (진공 중 비례상수 ≒ 9×10⁹ N·m²/C²)',
      unit: 'N (뉴턴)',
      caution: '거리 r은 반드시 m 단위로 계산해야 합니다.'
    },
    {
      id: 'f_em_02',
      subject_id: 'em',
      subject: '전기자기학',
      title: '점전하에 의한 전계의 세기',
      front: '점전하 Q로부터 r[m] 떨어진 지점의 전계 E는?',
      formula: 'E = (1 / 4πε₀) · (Q / r²) [V/m]',
      meaning: '단위 양전하(+1C)가 받는 정전기력의 크기입니다.',
      unit: 'V/m 또는 N/C',
      caution: '전위 V는 1/r에 비례하고, 전계 E는 1/r²에 비례합니다.'
    },
    {
      id: 'f_em_03',
      subject_id: 'em',
      subject: '전기자기학',
      title: '평행판 콘덴서의 정전용량',
      front: '극판 면적 S, 간격 d, 유전율 ε인 평행판 정전용량 C는?',
      formula: 'C = ε · (S / d) = ε₀εr · (S / d) [F]',
      meaning: '극판 면적에 비례하고 두 판 사이 간격 d에 반비례합니다.',
      unit: 'F (패럿)',
      caution: '유전체를 채우면 진공 대비 비유전율 εr배만큼 증가합니다.'
    },
    {
      id: 'f_pe_01',
      subject_id: 'pe',
      subject: '전력공학',
      title: '전력 손실 공식',
      front: '3상 3선식 선로에서 전력손실 Pl은?',
      formula: 'Pl = 3 · I²R = (P² · R) / (V² · cos²θ) [W]',
      meaning: '전력 손실은 송전 전압 V의 제곱과 역률의 제곱에 반비례합니다.',
      unit: 'W (와트)',
      caution: '송전 전압을 n배 올리면 전력 손실은 1/n²로 급격히 줄어듭니다.'
    },
    {
      id: 'f_pe_02',
      subject_id: 'pe',
      subject: '전력공학',
      title: '전선의 이도(Dip) 계산식',
      front: '경간 S, 전선 단위무게 W, 수평장력 T일 때 이도 D는?',
      formula: 'D = (W · S²) / (8 · T) [m]',
      meaning: '전선이 늘어지는 깊이는 경간(S)의 제곱에 비례합니다.',
      unit: 'm (미터)',
      caution: '실제 전선 길이 L = S + (8D² / 3S) 입니다.'
    },
    {
      id: 'f_pe_03',
      subject_id: 'pe',
      subject: '전력공학',
      title: '단락 용량 (차단기 용량)',
      front: '퍼센트 임피던스 %Z를 이용한 단락용량 Ps 공식은?',
      formula: 'Ps = (100 / %Z) · Pn [MVA] = √3 · V · Is',
      meaning: '단락 용량은 %Z에 반비례하므로 %Z가 작을수록 단락전류가 커집니다.',
      unit: 'MVA 또는 kVA',
      caution: '기준 용량 Pn의 단위와 맞추어 환산해야 합니다.'
    },
    {
      id: 'f_emach_01',
      subject_id: 'emach',
      subject: '전기기기',
      title: '동기속도 (Synchronous Speed)',
      front: '극수 P, 주파수 f일 때 동기기/유도기의 동기속도 Ns는?',
      formula: 'Ns = (120 · f) / P [rpm]',
      meaning: '회전자계의 회전 속도로, 주파수 f에 비례하고 극수 P에 반비례합니다.',
      unit: 'rpm',
      caution: '60Hz 기준으로 4극기는 1800 rpm, 2극기는 3600 rpm입니다.'
    },
    {
      id: 'f_emach_02',
      subject_id: 'emach',
      subject: '전기기기',
      title: '유도전동기 슬립 (Slip)',
      front: '동기속도 Ns, 회전자 속도 N일 때 슬립 s는?',
      formula: 's = (Ns - N) / Ns',
      meaning: '동기속도와 실제 회전자 속도의 상대적인 속도 차이 비율입니다.',
      unit: '단위 없음 (0 ~ 1)',
      caution: '정지 시 s=1, 동기속도 운전 시 s=0 입니다.'
    },
    {
      id: 'f_emach_03',
      subject_id: 'emach',
      subject: '전기기기',
      title: '변압기 권수비 (Turn Ratio)',
      front: '1차 권수 N₁, 2차 권수 N₂일 때 권수비 a는?',
      formula: 'a = N₁ / N₂ = V₁ / V₂ = I₂ / I₁ = √(Z₁ / Z₂)',
      meaning: '전압은 권수비에 비례하고, 전류는 권수비에 반비례합니다.',
      unit: '비율 (상수)',
      caution: '임피던스 비는 권수비의 제곱(a²)에 비례합니다.'
    },
    {
      id: 'f_cc_01',
      subject_id: 'cc',
      subject: '회로이론 및 제어공학',
      title: 'LC 공진 주파수',
      front: 'RLC 직렬 공진 회로의 공진 주파수 f₀는?',
      formula: 'f₀ = 1 / (2π · √(L · C)) [Hz]',
      meaning: '유도 리액턴스 ωL과 용량 리액턴스 1/ωC가 일치하여 임피던스가 최소(Z=R)가 되는 주파수입니다.',
      unit: 'Hz (헤르츠)',
      caution: '직렬 공진 시 임피던스는 최소, 전류는 최대가 됩니다.'
    },
    {
      id: 'f_cc_02',
      subject_id: 'cc',
      subject: '회로이론 및 제어공학',
      title: '3상 교류 전력 계산식',
      front: '선간전압 V, 선전류 I, 역률 cosθ일 때 3상 유효전력 P는?',
      formula: 'P = √3 · V · I · cosθ [W] = 3 · Vp · Ip · cosθ',
      meaning: '선간값 기준으로는 √3을 곱하고, 상값 기준으로는 3을 곱합니다.',
      unit: 'W 또는 kW',
      caution: '별도 언급이 없는 전압/전류는 항상 선간 전압 및 실효값입니다.'
    },
    {
      id: 'f_cc_03',
      subject_id: 'cc',
      subject: '회로이론 및 제어공학',
      title: 'RL 회로의 시정수 (Time Constant)',
      front: '저항 R과 인덕턴스 L 직렬 회로의 시정수 τ는?',
      formula: 'τ = L / R [s]',
      meaning: '정상 상태 전류의 약 63.2%에 도달하는 데 걸리는 시간입니다.',
      unit: 's (초)',
      caution: 'RC 회로의 시정수는 τ = R · C [s] 입니다.'
    },
    {
      id: 'f_er_01',
      subject_id: 'er',
      subject: '전기설비기술기준',
      title: 'KEC 저압 전압의 구분',
      front: 'KEC 규정 상 저압의 전압 범위는?',
      formula: '교류(AC) ≤ 1,000 [V], 직류(DC) ≤ 1,500 [V]',
      meaning: '기존 규정(AC 600V, DC 750V)에서 국제 규격(IEC)에 맞춰 개정되었습니다.',
      unit: 'V (볼트)',
      caution: '저압을 초과하고 7,000V 이하인 전압은 고압, 7,000V 초과는 특고압입니다.'
    },
    {
      id: 'f_er_02',
      subject_id: 'er',
      subject: '전기설비기술기준',
      title: '저압 전로의 절연저항 기준',
      front: 'KEC SELV/PELV, FELV 및 500V 이하 저압 전로 절연저항 기준은?',
      formula: 'SELV/PELV: 0.5 MΩ 이상, FELV 및 500V 이하: 1.0 MΩ 이상',
      meaning: '누전 방지를 위해 직류 시험전압 인가 시 최소 절연저항값입니다.',
      unit: 'MΩ (메가옴)',
      caution: '500V를 초과하는 저압 선로는 DC 1000V 인가 시 1.0 MΩ 이상이어야 합니다.'
    }
  ];

  // 3. 10개년 기출문제 회차 목록 (2015~2026 34회차, 총 3,400문항 완벽 연계)
  const EXAM_ROUNDS = [
    { id: '2026_1', year: 2026, round: 1, title: '2026년 제1회', questions_count: 100, is_cbt: true, note: '최신 복원 기출' },
    { id: '2025_3', year: 2025, round: 3, title: '2025년 제3회', questions_count: 100, is_cbt: true, note: '최신 복원 기출' },
    { id: '2025_2', year: 2025, round: 2, title: '2025년 제2회', questions_count: 100, is_cbt: true, note: '최신 복원 기출' },
    { id: '2025_1', year: 2025, round: 1, title: '2025년 제1회', questions_count: 100, is_cbt: true, note: '최신 복원 기출' },
    { id: '2024_3', year: 2024, round: 3, title: '2024년 제3회', questions_count: 100, is_cbt: true, note: 'KEC 개정 반영' },
    { id: '2024_2', year: 2024, round: 2, title: '2024년 제2회', questions_count: 100, is_cbt: true, note: 'KEC 개정 반영' },
    { id: '2024_1', year: 2024, round: 1, title: '2024년 제1회', questions_count: 100, is_cbt: true, note: 'KEC 개정 반영' },
    { id: '2023_3', year: 2023, round: 3, title: '2023년 제3회', questions_count: 100, is_cbt: true, note: 'CBT 복원 기출' },
    { id: '2023_2', year: 2023, round: 2, title: '2023년 제2회', questions_count: 100, is_cbt: true, note: 'CBT 복원 기출' },
    { id: '2023_1', year: 2023, round: 1, title: '2023년 제1회', questions_count: 100, is_cbt: true, note: 'CBT 복원 기출' },
    { id: '2022_3', year: 2022, round: 3, title: '2022년 제3회', questions_count: 100, is_cbt: true, note: 'CBT 전환 회차' },
    { id: '2022_2', year: 2022, round: 2, title: '2022년 제2회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2022_1', year: 2022, round: 1, title: '2022년 제1회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2021_3', year: 2021, round: 3, title: '2021년 제3회', questions_count: 100, is_cbt: false, note: 'KEC 최초 도입' },
    { id: '2021_2', year: 2021, round: 2, title: '2021년 제2회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2021_1', year: 2021, round: 1, title: '2021년 제1회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2020_3', year: 2020, round: 3, title: '2020년 제3회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2020_2', year: 2020, round: 2, title: '2020년 제2회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2020_1', year: 2020, round: 1, title: '2020년 제1회', questions_count: 100, is_cbt: false, note: '통합 1·2회차' },
    { id: '2019_3', year: 2019, round: 3, title: '2019년 제3회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2019_2', year: 2019, round: 2, title: '2019년 제2회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2019_1', year: 2019, round: 1, title: '2019년 제1회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2018_3', year: 2018, round: 3, title: '2018년 제3회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2018_2', year: 2018, round: 2, title: '2018년 제2회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2018_1', year: 2018, round: 1, title: '2018년 제1회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2017_3', year: 2017, round: 3, title: '2017년 제3회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2017_2', year: 2017, round: 2, title: '2017년 제2회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2017_1', year: 2017, round: 1, title: '2017년 제1회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2016_3', year: 2016, round: 3, title: '2016년 제3회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2016_2', year: 2016, round: 2, title: '2016년 제2회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2016_1', year: 2016, round: 1, title: '2016년 제1회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2015_3', year: 2015, round: 3, title: '2015년 제3회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2015_2', year: 2015, round: 2, title: '2015년 제2회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' },
    { id: '2015_1', year: 2015, round: 1, title: '2015년 제1회', questions_count: 100, is_cbt: false, note: '정기 검정 기출' }
  ];

  // 4. Ebook 링크 메타데이터
  const EBOOKS = {
    question_book: {
      title: '전기기사 필기 기출문제집 (2015~2026 전 회차 34회분)',
      pages: 905,
      questions: 3400,
      path: '/past-exams/전기기사_필기_기출문제집_10개년_모두CBT.pdf'
    },
    solution_book: {
      title: '전기기사 필기 정답해설집 (2015~2026 전 회차 해설)',
      pages: 1558,
      path: '/past-exams/전기기사_필기_정답해설집_10개년_모두CBT.pdf'
    },
    theory_master: {
      title: '2025 개정판 전기기사 필기치트키 핵심요약집',
      pages: 207,
      path: '/[25년개정판]전기기사 필기치트키(F)_250520_1.pdf'
    }
  };

  // 5. 헬퍼 함수
  function getSubjectById(subId) {
    return SUBJECTS.find(s => s.id === subId || s.key === subId);
  }

  function getFormulasBySubject(subId) {
    if (!subId || subId === 'all') return FORMULAS;
    return FORMULAS.filter(f => f.subject_id === subId);
  }

  function getRoundById(roundId) {
    return EXAM_ROUNDS.find(r => r.id === roundId);
  }

  global.ELECTRIC_DATA = {
    subjects: SUBJECTS,
    formulas: FORMULAS,
    rounds: EXAM_ROUNDS,
    ebooks: EBOOKS,
    getSubjectById: getSubjectById,
    getFormulasBySubject: getFormulasBySubject,
    getRoundById: getRoundById
  };
})(window);

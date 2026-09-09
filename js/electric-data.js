/**
 * 전기기사 필기 준비 - 5개 과목 메타데이터, 단원 개념 및 공식 암기 카드 데이터셋
 */

(function (global) {
  'use strict';

  // 1. 5개 시험 과목 정보
  const SUBJECTS = [
    {
      id: 'circuit',
      key: 'circuit',
      exam_subject_id: 'cc',
      name: '회로이론',
      icon: '💡',
      color: '#059669',
      pdf_file: '/theory/01_회로이론_핵심이론치트키.pdf',
      pdf_title: '회로이론 핵심이론 치트키 (31P)',
      desc: '옴의 법칙, 키르히호프, 교류 RLC 직·병렬 회로, 교류전력, 테브난/노턴 정리, 대칭 3상 교류, 4단자망, 라플라스 변환 및 과도현상',
      chapters: [
        { title: '직류 회로의 기본 법칙', summary: '옴의 법칙(V=IR), KCL(전류 법칙), KVL(전압 법칙), 저항의 직렬 전압분배 및 병렬 전류분배, 휘스톤 브리지 평형 조건(R₁R₄ = R₂R₃)' },
        { title: '정현파 교류와 RLC 회로', summary: '순싯값/실횻값/평균값, 파형률/파고율, R-L-C 직렬 및 병렬 임피던스, 유도성/용량성 리액턴스, 공진 주파수 fo = 1/(2π√LC)' },
        { title: '교류 전력과 회로망 정리', summary: '유효전력(P = VI cosθ), 무효전력(Pr = VI sinθ), 피상전력(Pa = VI), 복소전력, 중첩의 정리, 테브난 및 노턴 등가변환, 밀만의 정리' },
        { title: '대칭 3상 교류와 유도결합', summary: 'Y결선(선간전압 = √3 상전압, 위상 30° 앞섬), Δ결선(선전류 = √3 상전류, 위상 30° 뒤짐), 3상 전력 P = √3 V_L I_L cosθ, V결선(출력비 57.7%, 이용률 86.6%)' },
        { title: '대칭좌표법 및 4단자망', summary: '영상분/정상분/역상분 분해, 발전기 기본식, 4단자 정수(A: 전압비, B: 임피던스, C: 어드미턴스, D: 전류비, AD - BC = 1)' },
        { title: '라플라스 변환 및 과도현상', summary: '기본 함수의 라플라스 변환(단위계단, 지수, 삼각함수), 미분·적분의 변환, RL/RC 회로의 직류 과도현상과 시정수(τ = L/R, τ = RC)' }
      ]
    },
    {
      id: 'control',
      key: 'control',
      exam_subject_id: 'cc',
      name: '제어공학',
      icon: '🎛️',
      color: '#0D9488',
      pdf_file: '/theory/02_제어공학_핵심이론치트키.pdf',
      pdf_title: '제어공학 핵심이론 치트키 (19P)',
      desc: '폐회로 제어계, 블록선도와 신호흐름선도(메이슨 공식), 루스-후르비츠 안정도 판별법, 근궤적, 주파수 응답, 상태공간법, 시퀀스 제어',
      chapters: [
        { title: '폐회로 제어계의 구성', summary: '목표값, 기준입력 발생기, 오차검출기, 조절기, 조작기, 제어대상, 궤환신호의 피드백 루프 및 제어계 분류(정치제어, 추종제어, 추치제어)' },
        { title: '블록선도와 신호흐름선도', summary: '블록선도 등가변환, 메이슨의 이득 공식 G = (Σ Pk · Δk) / Δ 을 이용한 복잡한 제어계의 전체 전달함수 계산' },
        { title: '시간 영역 해석과 안정도', summary: '특성방정식의 근, 루스(Routh) 안정도 판별법(1열 부호 변화 횟수 = 우반면 극점 수), 후르비츠 행렬식' },
        { title: '2차 제어계 과도응답', summary: '특성방정식 s² + 2ζωn s + ωn² = 0, 감쇠비 ζ 크기에 따른 응답(ζ>1 과제동, ζ=1 임계제동, 0<ζ<1 감쇠진동, ζ=0 무제동), 최대오버슈트' },
        { title: '주파수 응답 및 보드선도', summary: '주파수 전달함수 G(jω), 보드선도(Bode plot)의 이득여유(Gain Margin)와 위상여유(Phase Margin), 나이퀴스트 판별법' },
        { title: '상태공간법 및 시퀀스 제어', summary: '상태방정식과 출력방정식, 상태천이행렬 Φ(t) = L⁻¹[(sI - A)⁻¹], 논리 게이트(AND, OR, NOT, NAND, NOR)와 드모르간의 법칙' }
      ]
    },
    {
      id: 'em',
      key: 'electromagnetics',
      exam_subject_id: 'em',
      name: '전기자기학',
      icon: '🧲',
      color: '#2563EB',
      pdf_file: '/theory/03_전기자기학_핵심이론치트키.pdf',
      pdf_title: '전기자기학 핵심이론 치트키 (46P)',
      desc: '쿨롱의 법칙, 전계와 전위, 가우스 법칙, 도체계와 정전용량, 유전체 경계조건, 자기장과 암페어 주회적분, 전자유도, 맥스웰 방정식',
      chapters: [
        { title: '쿨롱의 법칙과 전계', summary: '두 점전하 사이 작용하는 쿨롱의 힘 F = (1/4πε₀)(q₁q₂/r²), 단위 양전하가 받는 힘 전계 E = (1/4πε₀)(Q/r²)' },
        { title: '전위와 가우스 정리', summary: '점전하 및 연속 전하에 의한 전위 계산, 가우스 법칙 ∮E·dS = Q/ε₀, 구/원통/평면 도체의 전계와 전위' },
        { title: '도체계와 정전용량', summary: '도체의 전위계수와 용량계수, 평행판 정전용량 C = ε(S/d), 동심구 및 동축케이블 정전용량, 정전에너지 W = (1/2)CV²' },
        { title: '유전체와 분극', summary: '분극의 세기 P = ε₀(εr - 1)E, 유전체 경계조건(전계 접선성분 연속, 전속밀도 법선성분 연속), 맥스웰 응력' },
        { title: '자기장과 자성체', summary: '비오-사바르 법칙, 암페어 주회적분 법칙(∮H·dl = I), 자성체의 자화율과 투자율, 자성체의 분류(강자성/상자성/반자성)' },
        { title: '전자유도 및 맥스웰 방정식', summary: '패러데이 전자유도법칙, 자체/상호 인덕턴스 L = NΦ/I, 변위전류, 맥스웰 전자방정식 ∇×H = J + ∂D/∂t, 특성임피던스 η₀ ≒ 377Ω' }
      ]
    },
    {
      id: 'emach',
      key: 'electric_machines',
      exam_subject_id: 'emach',
      name: '전기기기',
      icon: '⚙️',
      color: '#7C3AED',
      pdf_file: '/theory/04_전기기기_핵심이론치트키.pdf',
      pdf_title: '전기기기 핵심이론 치트키 (44P)',
      desc: '직류기, 동기기, 변압기, 유도전동기, 정류기 및 전력전자 소자의 구조, 원리 및 운전 특성',
      chapters: [
        { title: '직류발전기 및 전동기', summary: '유기기전력 E = (pZ/60a)ΦN, 전기자 반작용(감자작용, 중성축 이동), 정류 작용, 직류 전동기 토크 T = kΦIa, 속도제어법' },
        { title: '동기발전기 및 전동기', summary: '동기속도 Ns = 120f/p, 단락비 Ks = 1/%Zs (철기계의 특성), 동기 임피던스, 전압변동률, 동기전동기 V곡선(위상특성곡선)' },
        { title: '변압기', summary: '권수비 a = V₁/V₂ = N₁/N₂, 변압기 등가회로와 임피던스 환산, 무부하손(철손)과 부하손(동손), 최대효율 조건(철손=동손), 병렬운전 조건' },
        { title: '유도전동기', summary: '슬립 s = (Ns - N)/Ns, 2차 효율 η = 1 - s, 토크와 전압의 관계(T ∝ V²), 권선형 유도기 비례추이, 기동법(Y-Δ 기동, 기동보상기법)' },
        { title: '정류기 및 전력전자', summary: '다이오드 정류회로(단상반파, 단상전파 Ed = 0.9E), 사이리스터(SCR) 위상제어, 양방향 제어소자 TRIAC, 인버터와 컨버터' }
      ]
    },
    {
      id: 'pe',
      key: 'power_engineering',
      exam_subject_id: 'pe',
      name: '전력공학',
      icon: '⚡',
      color: '#0284C7',
      pdf_file: '/theory/05_전력공학_핵심이론치트키.pdf',
      pdf_title: '전력공학 핵심이론 치트키 (38P)',
      desc: '송배전 선로 특성, 선로정수, 코로나 현상, 고장 계산, 중성점 접지, 이상전압 방호 및 발전공학',
      chapters: [
        { title: '전선로와 선로정수', summary: '복도체/다도체 방식의 특성(인덕턴스 L 감소, 정전용량 C 증가, 코로나 방지), 전선의 이도 D = (WS²)/(8T), 전선의 실제길이' },
        { title: '송전선로 특성 및 전력손실', summary: '단거리(집중정수 R, L), 중거리(T형/π형 4단자망), 장거리(분포정수 특성임피던스 Zo, 전파정수 γ), 전력손실 Pl ∝ 1/V²' },
        { title: '고장 계산 및 중성점 접지', summary: '대칭좌표법(영상/정상/역상분), 1선 지락/3상 단락고장, 접지방식 비교(소호리액터: 지락전류 최소/유도장해 최소, 직접접지: 이상전압 최소)' },
        { title: '이상전압과 피뢰기(LA)', summary: '내부이상전압과 외부이상전압(낙뢰), 피뢰기 구비조건(제한전압 낮을 것, 방전개시전압 높을 것, 속류차단능력 클 것), 가공지선 차폐' },
        { title: '배전 방식과 발전공학', summary: '가지식과 환상식, 부하율, 수용률, 부등률(≥ 1.0), 전력용 콘덴서에 의한 역률 개선, 수력/화력/원자력 발전 기초' }
      ]
    },
    {
      id: 'er',
      key: 'electrical_regulations',
      exam_subject_id: 'er',
      name: '전기설비기술기준(KEC)',
      icon: '📐',
      color: '#D97706',
      pdf_file: '/theory/06_전기설비기술기준_KEC_핵심이론치트키.pdf',
      pdf_title: '전기설비기술기준 KEC 치트키 (28P)',
      desc: '한국전기설비규정(KEC) 최신 개정판, 저압/고압/특고압 구분, 계통접지(TN, TT, IT), 전선로 이격거리, 옥내배선공사',
      chapters: [
        { title: '총칙 및 전압의 구분', summary: '저압(AC 1,000V 이하, DC 1,500V 이하), 고압(저압 초과 ~ 7,000V 이하), 특고압(7,000V 초과), 전로의 절연저항 기준' },
        { title: '계통접지 시스템(KEC)', summary: 'TN 계통(TN-S, TN-C, TN-C-S 중성선과 보호도체 결합/분리), TT 계통(독립 접지극 접속), IT 계통(비접지/고임피던스 접지), 감전보호' },
        { title: '가공전선로 및 지지물', summary: '가공전선 지표상 높이(도로 횡단 6m, 철도 6.5m), 보안공사(제1종, 제2종, 제3종), 풍압하중(갑종, 을종, 병종), 철탑의 종류(직선, 각도, 인류, 내장)' },
        { title: '옥내배선공사 및 특수시설', summary: '금속관, 합성수지관, 금속덕트, 케이블트레이 공사 기준, 방폭구조, 욕실 등 물기 많은 장소의 누전차단기 시설(15mA, 0.03초)' },
        { title: '발변전소 및 전기철도', summary: '변압기 내부고장 보호계전기(비율차동, 브흐홀츠), 피뢰기 시설 장소, 특고압 절연내력시험(시험전압 10분간 인가), 전기철도 전차선' }
      ]
    }
  ];

  // 2. 공식 암기 카드 데이터셋 (회로이론부터 전 영역 순차 수록)
  const FORMULAS = [
    // ==========================================
    // 1. 회로이론 (circuit)
    // ==========================================
    {
      id: 'f_cir_01',
      subject_id: 'circuit',
      subject: '회로이론',
      title: '옴의 법칙 및 전력 계산식',
      front: '전압 V, 전류 I, 저항 R 사이의 옴의 법칙 및 소비전력 P는?',
      formula: 'V = I · R [V],  P = V · I = I² · R = V² / R [W]',
      meaning: '전류는 전압에 비례하고 저항에 반비례하며, 저항에서 소비되는 전력은 전류의 제곱에 비례합니다.',
      unit: 'V (볼트), W (와트)',
      caution: '교류에서는 저항 R 대신 복소 임피던스 Z[Ω]를 적용합니다.'
    },
    {
      id: 'f_cir_02',
      subject_id: 'circuit',
      subject: '회로이론',
      title: '휘스톤 브리지 평형 조건',
      front: '4개 저항 R₁, R₂, R₃, R₄로 구성된 브리지 회로에서 검류계 전류 IG=0 이 되는 조건은?',
      formula: 'R₁ · R₄ = R₂ · R₃  (대각선 저항의 곱이 서로 일치)',
      meaning: '마주 보는 대각선 저항의 곱이 같으면 두 분기점의 전위가 같아져 중앙 검류계에 전류가 흐르지 않습니다.',
      unit: 'Ω (옴)',
      caution: '미지의 정밀 저항 측정이나 센서 회로의 핵심 원리입니다.'
    },
    {
      id: 'f_cir_03',
      subject_id: 'circuit',
      subject: '회로이론',
      title: 'RLC 직렬 공진 주파수',
      front: 'R-L-C 직렬 회로에서 공진이 일어날 때의 공진 주파수 f₀는?',
      formula: 'f₀ = 1 / (2π · √(L · C)) [Hz]',
      meaning: '유도 리액턴스 ωL과 용량 리액턴스 1/ωC가 상쇄되어 합성 리액턴스가 0이 되는 주파수입니다.',
      unit: 'Hz (헤르츠)',
      caution: '직렬 공진 시 임피던스는 최소(Z=R), 전류는 최대가 되며 역률은 1.0(동위상)입니다.'
    },
    {
      id: 'f_cir_04',
      subject_id: 'circuit',
      subject: '회로이론',
      title: '대칭 3상 교류 전력 계산식',
      front: '선간전압 V, 선전류 I, 역률 cosθ일 때 3상 유효전력 P는?',
      formula: 'P = √3 · V · I · cosθ [W] = 3 · Vp · Ip · cosθ',
      meaning: '선간값 기준 계산 시에는 √3을 곱하고, 1상값 기준 계산 시에는 3을 곱합니다.',
      unit: 'W 또는 kW',
      caution: '피상전력 Pa = √3·VI [VA], 무효전력 Pr = √3·VI·sinθ [var] 입니다.'
    },
    {
      id: 'f_cir_05',
      subject_id: 'circuit',
      subject: '회로이론',
      title: 'V결선의 출력비 및 이용률',
      front: 'Δ결선 변압기 3대 중 1대 고장 시 2대로 V결선할 때의 출력비와 이용률은?',
      formula: '출력비 = √3 / 3 ≒ 57.7%,  이용률 = √3 / 2 ≒ 86.6%',
      meaning: 'V결선 출력 Pv = √3 · P₁ (변압기 1대 용량의 √3배)가 됩니다.',
      unit: '% (백분율)',
      caution: '출력비는 고장 전 Δ출력(3P₁) 대비 비율, 이용률은 변압기 2대 설비용량(2P₁) 대비 비율입니다.'
    },
    {
      id: 'f_cir_06',
      subject_id: 'circuit',
      subject: '회로이론',
      title: '수동 4단자망 정수 성질',
      front: '선형 수동 4단자망 회로에서 4단자 정수 A, B, C, D 사이에 성립하는 식은?',
      formula: 'A · D - B · C = 1  (대칭 회로일 때는 A = D)',
      meaning: 'A는 전압비(무차원), B는 임피던스[Ω], C는 어드미턴스[℧], D는 전류비(무차원)입니다.',
      unit: '행렬식 = 1',
      caution: '송전단 Vs = A Vr + B Ir, Is = C Vr + D Ir 관계가 성립합니다.'
    },
    {
      id: 'f_cir_07',
      subject_id: 'circuit',
      subject: '회로이론',
      title: '직류 과도현상의 시정수 (Time Constant)',
      front: 'RL 직렬회로 및 RC 직렬회로의 시정수 τ는?',
      formula: 'RL 회로: τ = L / R [s],   RC 회로: τ = R · C [s]',
      meaning: '전류 또는 전압이 정상 상태의 약 63.2%에 도달하는 데 걸리는 시간입니다.',
      unit: 's (초)',
      caution: '시정수가 클수록 과도현상이 오래 지속되고 응답 속도가 느립니다.'
    },

    // ==========================================
    // 2. 제어공학 (control)
    // ==========================================
    {
      id: 'f_con_01',
      subject_id: 'control',
      subject: '제어공학',
      title: '메이슨의 이득 공식 (전달함수)',
      front: '신호흐름선도에서 전체 전달함수 T를 구하는 메이슨 공식은?',
      formula: 'T = (Σ Pk · Δk) / Δ',
      meaning: 'Pk는 k번째 전방경로 이득, Δ = 1 - (개별 루프 이득 합) + (서로 접하지 않는 2개 루프 곱의 합) ... 입니다.',
      unit: '전달함수 (비율)',
      caution: '루프가 전방경로와 접하는지 여부를 정확히 판별해야 합니다.'
    },
    {
      id: 'f_con_02',
      subject_id: 'control',
      subject: '제어공학',
      title: '2차 제어계 특성방정식 및 감쇠비',
      front: '표준 2차 제어계 특성방정식과 감쇠비 ζ(제동비)에 따른 과도응답 특성은?',
      formula: 's² + 2ζωn s + ωn² = 0,  ζ > 1: 과제동,  ζ = 1: 임계제동,  0 < ζ < 1: 감쇠진동',
      meaning: 'ζ = 1 일 때 진동 없이 목표값에 가장 빠르게 도달합니다.',
      unit: '감쇠비 ζ (무차원)',
      caution: 'ζ = 0 이면 지속적인 무감쇠 진동을 일으킵니다.'
    },
    {
      id: 'f_con_03',
      subject_id: 'control',
      subject: '제어공학',
      title: '보드선도 이득여유 및 위상여유',
      front: '주파수 응답 보드선도에서 이득여유(GM)와 위상여유(PM)의 정의는?',
      formula: 'GM = -20 log₁₀ |G(jωp)| [dB]  (위상교차주파수에서 0dB까지의 마진)',
      meaning: '위상이 -180°가 되는 점에서의 이득이 0dB보다 작아야(여유가 양수여야) 계통이 안정합니다.',
      unit: 'dB (데시벨), ° (도)',
      caution: '안정 조건: GM > 0 dB 이고 PM > 0° 이어야 합니다.'
    },

    // ==========================================
    // 3. 전기자기학 (em)
    // ==========================================
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

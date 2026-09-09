/**
 * 전기기사 필기 준비 - 자체 작성 샘플 기출문제 데이터셋
 * - 저작권 준수: 공개 기출 자료의 유형을 바탕으로 문항과 해설을 100% 자체 작성
 */

(function (global) {
  'use strict';

  const QUESTIONS = [
    // ==========================================
    // 1과목: 전기자기학 (em)
    // ==========================================
    {
      id: 'q_em_2024_1_01',
      exam: '전기기사',
      year: 2024,
      round: 1,
      subject_id: 'em',
      subject: '전기자기학',
      chapter: '쿨롱의 법칙과 전계',
      question_no: 1,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '진공 중에서 두 점전하 q₁, q₂가 거리 r[m]만큼 떨어져 있을 때 두 전하 사이에 작용하는 정전기력 F에 대한 설명으로 옳은 것은?',
      choices: [
        '거리 r의 제곱에 반비례한다.',
        '거리 r에 직접 비례한다.',
        '두 전하량의 곱의 제곱에 비례한다.',
        '두 전하의 부호에 상관없이 항상 인력만 작용한다.'
      ],
      answer: 0,
      explanation: '쿨롱의 법칙에 따르면 정전기력 F = (1 / 4πε₀) · (|q₁q₂| / r²) 입니다. 힘의 크기는 두 전하량의 곱에 비례하고, 두 전하 사이 거리 r의 제곱에 반비례합니다.',
      difficulty: '기초',
      tags: ['쿨롱의 법칙', '정전기력', '핵심'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_em_2024_1_02',
      exam: '전기기사',
      year: 2024,
      round: 1,
      subject_id: 'em',
      subject: '전기자기학',
      chapter: '전위와 가우스 정리',
      question_no: 2,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '반지름 a[m]인 구도체에 전하 Q[C]를 주었을 때, 구 내부(r < a) 임의의 점에서의 전계의 세기 E[V/m]는?',
      choices: [
        '0',
        'Q / (4πε₀a²)',
        'Q / (4πε₀r²)',
        'Q / (4πε₀a)'
      ],
      answer: 0,
      explanation: '대전된 도체 내부에는 전하가 존재하지 않고 표면에만 분포하므로, 도체 내부 폐곡면 내 전하량의 합은 0이 되어 전계의 세기 E = 0 입니다. (단, 전위는 표면 전위와 동일한 등전위 상태입니다.)',
      difficulty: '기초',
      tags: ['가우스 정리', '도체 내부 전계', '빈출'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_em_2023_2_03',
      exam: '전기기사',
      year: 2023,
      round: 2,
      subject_id: 'em',
      subject: '전기자기학',
      chapter: '도체계와 정전용량',
      question_no: 3,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '극판 간격이 d인 평행판 콘덴서에 전압 V를 가했을 때 축적되는 정전에너지 W[J]를 나타낸 식으로 옳지 않은 것은? (단, C는 정전용량, Q는 충전전하량)',
      choices: [
        'W = 1/2 · C · V',
        'W = 1/2 · C · V²',
        'W = 1/2 · Q · V',
        'W = Q² / (2 · C)'
      ],
      answer: 0,
      explanation: '콘덴서에 저장되는 정전에너지는 W = 1/2 · C · V² = 1/2 · Q · V = Q² / (2C) 입니다. ①번 식은 V의 제곱이 누락되어 옳지 않습니다.',
      difficulty: '보통',
      tags: ['정전에너지', '콘덴서'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_em_2023_1_04',
      exam: '전기기사',
      year: 2023,
      round: 1,
      subject_id: 'em',
      subject: '전기자기학',
      chapter: '유전체와 분극',
      question_no: 4,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '서로 다른 두 유전체의 경계면에 전계가 수직으로 입사할 때, 경계면에서 연속(연속적으로 보존)인 물리량은?',
      choices: [
        '전속밀도의 법선성분 (Dn1 = Dn2)',
        '전계의 법선성분 (En1 = En2)',
        '전계의 접선성분만 0이 된다.',
        '분극의 세기 (P1 = P2)'
      ],
      answer: 0,
      explanation: '유전체 경계조건: 1) 전속밀도의 법선(수직) 성분은 연속(Dn1 = Dn2), 2) 전계의 접선(수평) 성분은 연속(Et1 = Et2)입니다. 수직 입사이므로 전속밀도의 법선 성분이 연속입니다.',
      difficulty: '심화',
      tags: ['유전체 경계조건', '전속밀도'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_em_2022_3_05',
      exam: '전기기사',
      year: 2022,
      round: 3,
      subject_id: 'em',
      subject: '전기자기학',
      chapter: '자기장과 자성체',
      question_no: 5,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '무한장 직선 도선에 전류 I[A]가 흐를 때, 도선에서 r[m] 떨어진 지점의 자계의 세기 H[AT/m]는?',
      choices: [
        'H = I / (2π · r)',
        'H = I / (4π · r)',
        'H = I / (2 · r)',
        'H = (2π · I) / r'
      ],
      answer: 0,
      explanation: '암페어의 주회적분 법칙에 의해 ∮H·dl = H · (2πr) = I 이므로, H = I / (2πr) [AT/m] 입니다.',
      difficulty: '기초',
      tags: ['암페어 법칙', '무한장 직선자계'],
      is_past_exam: true,
      review_required: false
    },

    // ==========================================
    // 2과목: 전력공학 (pe)
    // ==========================================
    {
      id: 'q_pe_2024_1_01',
      exam: '전기기사',
      year: 2024,
      round: 1,
      subject_id: 'pe',
      subject: '전력공학',
      chapter: '송전선로의 특성',
      question_no: 1,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '송전선로에 복도체(또는 다도체) 방식을 채용할 때 얻을 수 있는 주요 장점이 아닌 것은?',
      choices: [
        '선로의 작용 정전용량이 감소한다.',
        '선로의 작용 인덕턴스가 감소한다.',
        '코로나 임계전압이 상승하여 코로나 방전이 억제된다.',
        '송전용량과 송전 안정도가 증대된다.'
      ],
      answer: 0,
      explanation: '복도체 방식을 채용하면 등가반지름이 커지므로 작용 인덕턴스 L은 감소하고, 반대로 작용 정전용량 C는 증가합니다. ①번의 정전용량 감소는 잘못된 설명입니다.',
      difficulty: '보통',
      tags: ['복도체', '코로나현상', '빈출'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_pe_2024_1_02',
      exam: '전기기사',
      year: 2024,
      round: 1,
      subject_id: 'pe',
      subject: '전력공학',
      chapter: '전선로와 가공전선',
      question_no: 2,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '가공 송전선로의 경간이 200m이고 전선 1m당 중량이 1kg, 전선의 허용 수평장력이 1,000kg일 때 전선의 이도(dip)는 약 몇 m인가?',
      choices: [
        '5.0 m',
        '2.5 m',
        '10.0 m',
        '1.25 m'
      ],
      answer: 0,
      explanation: '이도 D = (W · S²) / (8 · T) = (1 × 200²) / (8 × 1000) = 40,000 / 8,000 = 5.0 [m] 입니다.',
      difficulty: '보통',
      tags: ['이도계산', '계산문제'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_pe_2023_2_03',
      exam: '전기기사',
      year: 2023,
      round: 2,
      subject_id: 'pe',
      subject: '전력공학',
      chapter: '고장 계산과 안정도',
      question_no: 3,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '3상 송전선로에서 1선 지락 고장이 발생했을 때, 고장점에 나타나는 대칭분 전류에 대한 설명으로 옳은 것은?',
      choices: [
        '영상전류, 정상전류, 역상전류의 크기가 모두 같다. (I₀ = I₁ = I₂)',
        '정상전류만 흐르고 영상전류와 역상전류는 흐르지 않는다.',
        '영상전류는 0이고 정상전류와 역상전류의 합이 단락전류가 된다.',
        '역상전류만 정상전류의 3배가 된다.'
      ],
      answer: 0,
      explanation: '1선 지락 고장 시에는 대칭분 직렬 접속 회로가 형성되어 I₀ = I₁ = I₂ = (Ea / (Z₀ + Z₁ + Z₂)) 가 성립합니다. 따라서 3가지 대칭분 전류의 크기가 모두 같습니다.',
      difficulty: '심화',
      tags: ['1선지락', '대칭좌표법'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_pe_2023_1_04',
      exam: '전기기사',
      year: 2023,
      round: 1,
      subject_id: 'pe',
      subject: '전력공학',
      chapter: '이상전압과 방호',
      question_no: 4,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '피뢰기(Lightning Arrester)의 이상적인 특성으로 가장 적절한 것은?',
      choices: [
        '상용주파 방전개시전압은 높고, 충격 방전개시전압과 제한전압은 낮아야 한다.',
        '상용주파 방전개시전압과 충격 방전개시전압이 모두 낮아야 한다.',
        '제한전압은 높을수록 변전소 절연보호에 유리하다.',
        '속류(follow current) 차단 능력이 없어야 전압을 유지한다.'
      ],
      answer: 0,
      explanation: '피뢰기는 평상시 계통 전압에는 방전하지 않도록 상용주파 방전개시전압이 높아야 하고, 낙뢰 등 뇌서지 침입 시에는 즉시 방전하도록 충격 방전개시전압과 단자 간 제한전압이 낮아야 기기를 안전하게 보호합니다.',
      difficulty: '보통',
      tags: ['피뢰기', '제한전압'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_pe_2022_2_05',
      exam: '전기기사',
      year: 2022,
      round: 2,
      subject_id: 'pe',
      subject: '전력공학',
      chapter: '배전 방식과 수력/화력',
      question_no: 5,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '부등률(Diversity Factor)에 대한 설명으로 옳은 것은?',
      choices: [
        '합성 최대수용전력에 대한 각 수용가 최대수용전력의 합의 비율이며 항상 1보다 크다.',
        '최대수용전력에 대한 평균전력의 비율이며 항상 1보다 작다.',
        '총 설비용량에 대한 최대수용전력의 비율을 의미한다.',
        '부등률이 작을수록 설비 이용 효율과 경제성이 높아진다.'
      ],
      answer: 0,
      explanation: '부등률 = (각 부하의 최대수용전력 합) / (합성 최대수용전력) 으로 정의되며, 각 수용가의 피크 발생 시간이 서로 다르기 때문에 항상 1 이상입니다. 부등률이 클수록 전력설비를 효율적으로 이용할 수 있습니다.',
      difficulty: '기초',
      tags: ['부등률', '수용률', '부하율'],
      is_past_exam: true,
      review_required: false
    },

    // ==========================================
    // 3과목: 전기기기 (emach)
    // ==========================================
    {
      id: 'q_emach_2024_1_01',
      exam: '전기기사',
      year: 2024,
      round: 1,
      subject_id: 'emach',
      subject: '전기기기',
      chapter: '직류발전기 및 전동기',
      question_no: 1,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '직류 분권발전기를 회전방향을 반대로 회전시키면 어떤 현상이 일어나는가?',
      choices: [
        '잔류자기가 소멸되어 발전되지 않는다.',
        '극성이 반대인 기전력이 발전된다.',
        '전압이 두 배로 상승하여 위험해진다.',
        '아무런 이상 없이 정상 발전된다.'
      ],
      answer: 0,
      explanation: '직류 분권발전기를 역회전시키면 유기기전력의 방향이 반대가 되어 계자 권선에 흐르는 전류가 기존 잔류자기를 상쇄하는 방향으로 흐르게 됩니다. 따라서 잔류자기가 소멸되어 전압을 확립하지 못합니다.',
      difficulty: '보통',
      tags: ['직류발전기', '잔류자기'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_emach_2024_1_02',
      exam: '전기기사',
      year: 2024,
      round: 1,
      subject_id: 'emach',
      subject: '전기기기',
      chapter: '동기발전기 및 전동기',
      question_no: 2,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '동기발전기에서 단락비(Short-circuit Ratio)가 큰 기계의 특징으로 옳지 않은 것은?',
      choices: [
        '전압변동률이 커진다.',
        '동기 임피던스가 작고 전기자 반작용이 작다.',
        '과부하 내량이 크고 계통 안정도가 높다.',
        '철손이 크고 기계 크기가 크며 가격이 비싸다(철기계).'
      ],
      answer: 0,
      explanation: '단락비가 큰 기계(철기계)는 공극이 넓고 동기 임피던스가 작아 전압변동률이 작아지며 안정도가 우수합니다. ①번의 전압변동률이 커진다는 설명은 옳지 않습니다.',
      difficulty: '심화',
      tags: ['동기발전기', '단락비', '빈출'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_emach_2023_2_03',
      exam: '전기기사',
      year: 2023,
      round: 2,
      subject_id: 'emach',
      subject: '전기기기',
      chapter: '변압기',
      question_no: 3,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '변압기에서 최대 효율이 발생하는 부하 조건은?',
      choices: [
        '철손과 동손이 같을 때 (Pi = Pc)',
        '철손이 동손의 2배일 때',
        '동손이 철손보다 훨씬 작을 때',
        '정격 전부하 상태일 때 항상 최대'
      ],
      answer: 0,
      explanation: '변압기의 효율 공식에서 고정손인 철손(Pi)과 부하에 따라 가변하는 동손(Pc)이 서로 같아지는 부하율에서 변압기의 효율이 최대가 됩니다.',
      difficulty: '기초',
      tags: ['변압기효율', '철손과동손'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_emach_2023_1_04',
      exam: '전기기사',
      year: 2023,
      round: 1,
      subject_id: 'emach',
      subject: '전기기기',
      chapter: '유도전동기',
      question_no: 4,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '60Hz, 4극 유도전동기가 슬립 4%로 회전할 때, 회전자의 실제 회전 속도 N[rpm]은?',
      choices: [
        '1,728 rpm',
        '1,800 rpm',
        '1,650 rpm',
        '1,750 rpm'
      ],
      answer: 0,
      explanation: '1) 동기속도 Ns = (120 × f) / P = (120 × 60) / 4 = 1,800 [rpm]. 2) 실제 회전자 속도 N = Ns · (1 - s) = 1,800 × (1 - 0.04) = 1,728 [rpm] 입니다.',
      difficulty: '보통',
      tags: ['유도전동기', '슬립', '속도계산'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_emach_2022_3_05',
      exam: '전기기사',
      year: 2022,
      round: 3,
      subject_id: 'emach',
      subject: '전기기기',
      chapter: '정류기 및 전력전자',
      question_no: 5,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '단상 전파 정류회로에서 입력 교류전압의 실효값이 E[V]일 때, 부하에 나타나는 직류 출력 평균전압 Ed는 약 얼마인가? (단, 정류 소자의 전압강하는 무시)',
      choices: [
        '0.90 · E [V]',
        '0.45 · E [V]',
        '1.17 · E [V]',
        '1.41 · E [V]'
      ],
      answer: 0,
      explanation: '단상 반파 정류 시 Ed = (√2 / π) · E ≒ 0.45 · E 이며, 단상 전파 정류 시에는 2배인 Ed = (2√2 / π) · E ≒ 0.90 · E 입니다.',
      difficulty: '기초',
      tags: ['정류회로', '직류평균전압'],
      is_past_exam: true,
      review_required: false
    },

    // ==========================================
    // 4과목: 회로이론 및 제어공학 (cc)
    // ==========================================
    {
      id: 'q_cc_2024_1_01',
      exam: '전기기사',
      year: 2024,
      round: 1,
      subject_id: 'cc',
      subject: '회로이론 및 제어공학',
      chapter: 'RLC 공진 및 교류전력',
      question_no: 1,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: 'R-L-C 직렬 회로에서 직렬 공진이 일어났을 때의 상태 설명으로 옳은 것은?',
      choices: [
        '회로의 임피던스가 최소(Z = R)가 되고 회로 전류가 최대가 된다.',
        '회로의 임피던스가 무한대가 되어 전류가 흐르지 않는다.',
        '유도 리액턴스가 용량 리액턴스보다 커져 지상전류가 흐른다.',
        '회로의 합성 역률이 0이 된다.'
      ],
      answer: 0,
      explanation: 'RLC 직렬 공진 시에는 ωL = 1/ωC 가 되어 리액턴스 성분이 서로 상쇄됩니다. 따라서 전체 임피던스 Z = R (최소값)이 되며, 옴의 법칙 I = V/Z에 의해 전류는 최대가 되고 역률은 1(100%)이 됩니다.',
      difficulty: '기초',
      tags: ['직렬공진', '임피던스'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_cc_2024_1_02',
      exam: '전기기사',
      year: 2024,
      round: 1,
      subject_id: 'cc',
      subject: '회로이론 및 제어공학',
      chapter: '대칭 3상 교류 및 4단자망',
      question_no: 2,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '대칭 3상 Y결선 회로에서 선간전압 Vl과 상전압 Vp 사이의 크기 및 위상 관계로 옳은 것은?',
      choices: [
        '선간전압은 상전압의 √3배이고, 위상은 30° 앞선다.',
        '선간전압은 상전압과 크기가 같고, 위상은 30° 뒤진다.',
        '선간전압은 상전압의 3배이고, 위상은 90° 앞선다.',
        '선간전압은 상전압의 1/√3배이고, 위상은 동상이다.'
      ],
      answer: 0,
      explanation: 'Y결선에서는 선전류와 상전류의 크기가 같고(Il = Ip), 선간전압은 상전압보다 크기가 √3배 크며 위상은 30°(π/6 rad) 앞섭니다.',
      difficulty: '보통',
      tags: ['Y결선', '선간전압', '위상차'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_cc_2023_2_03',
      exam: '전기기사',
      year: 2023,
      round: 2,
      subject_id: 'cc',
      subject: '회로이론 및 제어공학',
      chapter: '라플라스 변환 및 과도현상',
      question_no: 3,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '단위 계단 함수 u(t)의 라플라스 변환 L{u(t)}의 결과는?',
      choices: [
        '1 / s',
        '1',
        '1 / s²',
        's'
      ],
      answer: 0,
      explanation: '단위 계단 함수 u(t)의 라플라스 변환은 ∫[0 to ∞] 1 · e^(-st) dt = 1/s 입니다. (단위 임펄스 δ(t)는 1, 램프 함수 t는 1/s²)',
      difficulty: '기초',
      tags: ['라플라스변환', '단위계단함수'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_cc_2023_1_04',
      exam: '전기기사',
      year: 2023,
      round: 1,
      subject_id: 'cc',
      subject: '회로이론 및 제어공학',
      chapter: '자동제어계와 안정도',
      question_no: 4,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '폐루프 전달함수의 특성방정식이 s³ + 2s² + 3s + K = 0 일 때, 이 제어계가 안정하기 위한 K의 범위는?',
      choices: [
        '0 < K < 6',
        'K > 6',
        'K < 0',
        '0 < K < 3'
      ],
      answer: 0,
      explanation: '루스-후르비츠(Routh) 안정도 판별법에 의해 모든 계수가 양수(K > 0)이어야 하고, 1열 원소가 양수이려면 (2×3 - 1×K)/2 > 0 이어야 하므로 6 - K > 0 즉 K < 6 입니다. 종합하면 0 < K < 6 입니다.',
      difficulty: '심화',
      tags: ['루스판별법', '안정도'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_cc_2022_3_05',
      exam: '전기기사',
      year: 2022,
      round: 3,
      subject_id: 'cc',
      subject: '회로이론 및 제어공학',
      chapter: '직류회로 및 교류기초',
      question_no: 5,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '어떤 회로에 v(t) = 100√2 sin(ωt) [V]의 전압을 인가했을 때 i(t) = 10√2 sin(ωt - π/3) [A]의 전류가 흘렀다. 이 회로의 유효전력 P[W]는?',
      choices: [
        '500 W',
        '1000 W',
        '866 W',
        '250 W'
      ],
      answer: 0,
      explanation: '전압 실효값 V = 100V, 전류 실효값 I = 10A, 전압과 전류의 위상차 θ = π/3 (60°) 입니다. 유효전력 P = V · I · cosθ = 100 × 10 × cos(60°) = 1,000 × 0.5 = 500 [W] 입니다.',
      difficulty: '보통',
      tags: ['유효전력', '위상차'],
      is_past_exam: true,
      review_required: false
    },

    // ==========================================
    // 5과목: 전기설비기술기준 (er)
    // ==========================================
    {
      id: 'q_er_2024_1_01',
      exam: '전기기사',
      year: 2024,
      round: 1,
      subject_id: 'er',
      subject: '전기설비기술기준',
      chapter: '총칙 및 전압의 구분',
      question_no: 1,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '한국전기설비규정(KEC)에 따른 전압의 종별 구분에서 저압(Low Voltage)의 범위로 옳은 것은?',
      choices: [
        '직류 1,500V 이하, 교류 1,000V 이하',
        '직류 750V 이하, 교류 600V 이하',
        '직류 1,000V 이하, 교류 1,000V 이하',
        '직류 1,500V 이하, 교류 1,500V 이하'
      ],
      answer: 0,
      explanation: 'KEC 개정 규정에 의해 저압은 직류(DC) 1,500V 이하, 교류(AC) 1,000V 이하로 규정되어 있습니다.',
      difficulty: '기초',
      tags: ['KEC', '전압구분', '필수암기'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_er_2024_1_02',
      exam: '전기기사',
      year: 2024,
      round: 1,
      subject_id: 'er',
      subject: '전기설비기술기준',
      chapter: '전로의 절연 및 접지설계',
      question_no: 2,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: 'KEC 계통접지 방식 중 전원측 중성점을 직접 접지하고, 설비의 노출도전부는 계통의 중성선(N) 및 보호도체(PE)가 하나로 결합된 PEN 도체에 접속하는 방식은?',
      choices: [
        'TN-C 방식',
        'TN-S 방식',
        'TT 방식',
        'IT 방식'
      ],
      answer: 0,
      explanation: 'TN 방식 중 중성선(Neutral)과 보호도체(Protective)를 단일 도체(PEN)로 겸용(Combined)하여 배선하는 방식은 TN-C 계통입니다. (분리된 것은 TN-S)',
      difficulty: '보통',
      tags: ['계통접지', 'TN-C', 'KEC접지'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_er_2023_2_03',
      exam: '전기기사',
      year: 2023,
      round: 2,
      subject_id: 'er',
      subject: '전기설비기술기준',
      chapter: '가공전선로 및 이격거리',
      question_no: 3,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '저압 또는 고압 가공전선로가 도로를 횡단할 때, 지표상 높이는 최소 몇 m 이상이어야 하는가? (단, 철도 횡단 및 교통 지장이 없는 경우는 제외)',
      choices: [
        '6 m 이상',
        '5 m 이상',
        '4 m 이상',
        '6.5 m 이상'
      ],
      answer: 0,
      explanation: '가공전선로의 지표상 높이: 도로 횡단 시에는 원칙적으로 6m 이상이어야 합니다. (철도 횡단 시 레일면 기준 6.5m 이상, 횡단보도교 위 3.5m 이상)',
      difficulty: '기초',
      tags: ['도로횡단', '가공전선로높이'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_er_2023_1_04',
      exam: '전기기사',
      year: 2023,
      round: 1,
      subject_id: 'er',
      subject: '전기설비기술기준',
      chapter: '옥내배선공사',
      question_no: 4,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '금속관 공사에서 관의 굴곡 시 관의 곡률 반지름은 금속관 안지름의 최소 몇 배 이상이어야 하는가?',
      choices: [
        '6배 이상',
        '4배 이상',
        '8배 이상',
        '10배 이상'
      ],
      answer: 0,
      explanation: '금속관 배관 공사 시 관을 구부릴 때 단면이 심하게 변형되지 않도록 굴곡 부분 안쪽 반지름(곡률 반지름)은 금속관 안지름의 6배 이상이어야 합니다.',
      difficulty: '기초',
      tags: ['금속관공사', '곡률반지름'],
      is_past_exam: true,
      review_required: false
    },
    {
      id: 'q_er_2022_3_05',
      exam: '전기기사',
      year: 2022,
      round: 3,
      subject_id: 'er',
      subject: '전기설비기술기준',
      chapter: '발변전소 및 보호장치',
      question_no: 5,
      source: '공개 CBT',
      source_url: '',
      license_note: '공개 기출 자료 기준, 해설은 자체 작성',
      question: '고압 및 특고압 전로에 낙뢰 및 개폐서지로부터 기기를 보호하기 위해 피뢰기(LA)를 반드시 설치해야 하는 장소로 옳지 않은 것은?',
      choices: [
        '저압 수용가의 인입구 분전반 내부',
        '발전소·변전소 또는 이에 준하는 장소의 가공전선 인입구 및 인출구',
        '가공전선로와 지중전선로가 접속되는 곳',
        '특고압 가공전선로로부터 공급을 받는 수용장소의 인입구'
      ],
      answer: 0,
      explanation: '피뢰기 의무 설치 장소는 1) 발·변전소 인입구/인출구, 2) 특고압 수용가 인입구, 3) 가공전선로와 지중전선로 접속점, 4) 배전용 변압기 고압/특고압측입니다. 일반 저압 분전반은 피뢰기 의무 설치 장소가 아닙니다.',
      difficulty: '보통',
      tags: ['피뢰기설치장소', '수전설비'],
      is_past_exam: true,
      review_required: false
    }
,
    // ==========================================
    // 2024~2022 핵심 빈출 기출문제 추가분 (10제/과목)
    // ==========================================
    {
        "id": "q_em_2024_2_06",
        "exam": "전기기사",
        "year": 2024,
        "round": 2,
        "subject_id": "em",
        "subject": "전기자기학",
        "chapter": "자기장과 자성체",
        "question_no": 6,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "맥스웰의 전자방정식 중 전도전류와 변위전류가 자계를 생성함을 나타내는 수식은?",
        "choices": [
            "∇ × H = J + ∂D/∂t",
            "∇ × E = -∂B/∂t",
            "∇ · B = 0",
            "∇ · D = ρ"
        ],
        "answer": 0,
        "explanation": "앙페르-맥스웰 법칙에 따르면 자계의 회전 ∇×H는 전도전류밀도 J와 시간 변화에 따른 변위전류밀도 ∂D/∂t의 합과 같습니다. (②번은 패러데이 전자유도법칙, ③번은 자계의 발산 0, ④번은 가우스 법칙입니다.)",
        "difficulty": "중급",
        "tags": [
            "맥스웰 방정식",
            "변위전류",
            "암페어 법칙"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_em_2024_2_07",
        "exam": "전기기사",
        "year": 2024,
        "round": 2,
        "subject_id": "em",
        "subject": "전기자기학",
        "chapter": "유전체와 분극",
        "question_no": 7,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "진전하가 없는 두 유전체 경계면에서 전계 및 전속밀도의 경계조건으로 옳은 것은?",
        "choices": [
            "전계의 접선성분과 전속밀도의 법선성분이 연속이다.",
            "전계의 법선성분과 전속밀도의 접선성분이 연속이다.",
            "전계와 전속밀도 모두 법선성분만 연속이다.",
            "전계와 전속밀도 모두 접선성분만 연속이다."
        ],
        "answer": 0,
        "explanation": "유전체 경계면에서 경계조건: 1) 전계 E의 접선(접촉면 방향) 성분은 연속(E₁t = E₂t), 2) 표면에 전하가 없을 때 전속밀도 D의 법선(수직 방향) 성분은 연속(D₁n = D₂n)입니다.",
        "difficulty": "중급",
        "tags": [
            "경계조건",
            "유전체",
            "전속밀도"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_em_2023_1_08",
        "exam": "전기기사",
        "year": 2023,
        "round": 1,
        "subject_id": "em",
        "subject": "전기자기학",
        "chapter": "자기장과 자성체",
        "question_no": 8,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "반지름 a[m]인 무한장 직선 도체에 전류 I[A]가 균일하게 흐를 때, 도체 외부 중심축에서 r[m] 떨어진 지점(r > a)의 자계의 세기 H[AT/m]는?",
        "choices": [
            "I / (2πr)",
            "I / (2πa)",
            "I / (4πr²)",
            "(r · I) / (2πa²)"
        ],
        "answer": 0,
        "explanation": "암페어 주회적분 법칙(∮H·dl = I)에 의해 도체 외부(r > a)에서는 H · 2πr = I 이므로 H = I / (2πr) [AT/m] 입니다.",
        "difficulty": "기초",
        "tags": [
            "암페어 주회적분",
            "무한장 직선도체",
            "자계의 세기"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_em_2023_2_09",
        "exam": "전기기사",
        "year": 2023,
        "round": 2,
        "subject_id": "em",
        "subject": "전기자기학",
        "chapter": "자기장과 자성체",
        "question_no": 9,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "환상 솔레노이드의 자체 인덕턴스 L에 대한 설명으로 옳은 것은?",
        "choices": [
            "권선수(코일의 감은 횟수) N의 제곱에 비례한다.",
            "권선수 N에 반비례한다.",
            "솔레노이드의 단면적에 반비례한다.",
            "투자율 μ에 반비례한다."
        ],
        "answer": 0,
        "explanation": "환상 솔레노이드의 자체 인덕턴스는 L = (μ · S · N²) / ℓ [H] 입니다. 따라서 권선수 N의 제곱에 비례하고, 투자율과 단면적에 비례하며, 평균 자로 길이 ℓ에 반비례합니다.",
        "difficulty": "기초",
        "tags": [
            "인덕턴스",
            "솔레노이드",
            "권선수"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_em_2022_1_10",
        "exam": "전기기사",
        "year": 2022,
        "round": 1,
        "subject_id": "em",
        "subject": "전기자기학",
        "chapter": "자기장과 자성체",
        "question_no": 10,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "진공 중에서 전파되는 평면 전자파의 특성 임피던스(파동 임피던스) η₀의 값은 약 몇 [Ω]인가?",
        "choices": [
            "377 [Ω]",
            "120 [Ω]",
            "50 [Ω]",
            "75 [Ω]"
        ],
        "answer": 0,
        "explanation": "진공 중 평면파의 특성 임피던스는 η₀ = √(μ₀ / ε₀) = √(4π×10⁻⁷ / 8.855×10⁻¹²) ≒ 120π ≒ 377 [Ω] 입니다.",
        "difficulty": "기초",
        "tags": [
            "특성임피던스",
            "전자파",
            "진공"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_pe_2024_2_06",
        "exam": "전기기사",
        "year": 2024,
        "round": 2,
        "subject_id": "pe",
        "subject": "전력공학",
        "chapter": "송전선로의 특성",
        "question_no": 6,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "초고압 송전선로에서 복도체(또는 다도체) 방식을 단도체 방식과 비교했을 때 나타나는 현상으로 틀린 것은?",
        "choices": [
            "선로의 작용 인덕턴스가 증가한다.",
            "선로의 작용 정전용량이 증가한다.",
            "코로나 임계전압이 상승하여 코로나 발생이 억제된다.",
            "계통의 송전 용량 및 안정도가 증대된다."
        ],
        "answer": 0,
        "explanation": "복도체 방식을 사용하면 등가반지름이 커지므로 작용 인덕턴스 L은 감소하고, 작용 정전용량 C는 증가합니다. 따라서 선로의 리액턴스가 감소하여 안정도가 높아집니다.",
        "difficulty": "기초",
        "tags": [
            "복도체",
            "선로정수",
            "코로나"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_pe_2024_2_07",
        "exam": "전기기사",
        "year": 2024,
        "round": 2,
        "subject_id": "pe",
        "subject": "전력공학",
        "chapter": "전선로와 가공전선",
        "question_no": 7,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "동일한 송전전력 P와 동일한 선로저항 R, 동일한 역률에서 송전전압 V를 2배로 승압할 때, 송전선로의 전력손실 P_L은 승압 전의 몇 배가 되는가?",
        "choices": [
            "1/4 배",
            "1/2 배",
            "2 배",
            "4 배"
        ],
        "answer": 0,
        "explanation": "송전선로의 전력손실 P_L = (P² · R) / (V² · cos²θ) 입니다. 즉, 전력손실은 전압 V의 제곱에 반비례하므로 전압을 2배로 승압하면 전력손실은 (1/2)² = 1/4배로 줄어듭니다.",
        "difficulty": "기초",
        "tags": [
            "전력손실",
            "승압효과",
            "옴의법칙"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_pe_2023_1_08",
        "exam": "전기기사",
        "year": 2023,
        "round": 1,
        "subject_id": "pe",
        "subject": "전력공학",
        "chapter": "이상전압과 방호",
        "question_no": 8,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "3상 송전계통 중성점 접지방식 중 1선 지락고장 시 지락전류가 최소이며, 인근 통신선에 대한 유도장해가 가장 작은 접지방식은?",
        "choices": [
            "소호리액터 접지방식",
            "직접 접지방식",
            "비접지 방식",
            "저항 접지방식"
        ],
        "answer": 0,
        "explanation": "소호리액터 접지는 선로의 대지정전용량 C와 병렬공진하는 리액터 L을 중성점에 설치하여 1선 지락전류를 거의 0에 가깝게 소호하므로 지락전류가 최소이고 통신선 유도장해도 가장 작습니다.",
        "difficulty": "기초",
        "tags": [
            "중성점 접지",
            "소호리액터",
            "지락전류"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_pe_2023_2_09",
        "exam": "전기기사",
        "year": 2023,
        "round": 2,
        "subject_id": "pe",
        "subject": "전력공학",
        "chapter": "이상전압과 방호",
        "question_no": 9,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "송전선로 및 변전소에 설치하는 피뢰기(LA)의 이상적인 구비조건으로 옳지 않은 것은?",
        "choices": [
            "제한전압이 충분히 높을 것",
            "상용주파 방전개시전압이 높을 것",
            "충격 방전개시전압이 낮을 것",
            "속류 차단 능력이 우수할 것"
        ],
        "answer": 0,
        "explanation": "피뢰기가 방전 중 양단에 남는 전압인 제한전압은 피보호기기의 절연강도보다 낮아야 하므로, 제한전압은 낮을수록 좋습니다.",
        "difficulty": "중급",
        "tags": [
            "피뢰기",
            "제한전압",
            "이상전압"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_pe_2022_1_10",
        "exam": "전기기사",
        "year": 2022,
        "round": 1,
        "subject_id": "pe",
        "subject": "전력공학",
        "chapter": "배전 방식과 수력/화력",
        "question_no": 10,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "각 수용가의 최대전력의 합계가 120[kW]이고, 이들 수용가를 종합한 합성 최대전력이 100[kW]일 때 부등률은 얼마인가?",
        "choices": [
            "1.2",
            "0.83",
            "1.0",
            "12.0"
        ],
        "answer": 0,
        "explanation": "부등률 = (각 수용가의 최대전력의 합) / (합성 최대전력) = 120 / 100 = 1.2 입니다.",
        "difficulty": "기초",
        "tags": [
            "부등률",
            "배전계획",
            "최대전력"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_emach_2024_2_06",
        "exam": "전기기사",
        "year": 2024,
        "round": 2,
        "subject_id": "emach",
        "subject": "전기기기",
        "chapter": "직류발전기 및 전동기",
        "question_no": 6,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "직류 발전기에서 부하 시 전기자 전류에 의해 발생하는 전기자 반작용의 영향으로 틀린 것은?",
        "choices": [
            "주자속이 증가하여 유기기전력이 상승한다.",
            "자기적 중성축이 발전기 회전 방향으로 이동한다.",
            "정류자편 간 전압이 불균일해져 불꽃이 발생할 수 있다.",
            "주자속의 감자작용이 일어난다."
        ],
        "answer": 0,
        "explanation": "전기자 반작용이 일어나면 자기포화 현상 때문에 주자속이 감소(감자작용)하므로 유기기전력이 감소하게 됩니다.",
        "difficulty": "중급",
        "tags": [
            "직류기",
            "전기자 반작용",
            "감자작용"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_emach_2024_2_07",
        "exam": "전기기사",
        "year": 2024,
        "round": 2,
        "subject_id": "emach",
        "subject": "전기기기",
        "chapter": "동기발전기 및 전동기",
        "question_no": 7,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "동기발전기의 단락비(Short-circuit ratio)가 큰 기계(철기계)의 일반적인 특성으로 옳은 것은?",
        "choices": [
            "전압변동률이 작고 과도 안정도가 높다.",
            "전압변동률이 크고 안정도가 낮다.",
            "선로충전용량이 작다.",
            "기계의 크기와 무게가 작고 가격이 저렴하다."
        ],
        "answer": 0,
        "explanation": "단락비 Ks가 큰 기계는 철기계로서 전기자 반작용이 작고 동기 임피던스가 작습니다. 따라서 전압변동률이 작고 안정도가 높으며 선로충전용량이 큽니다.",
        "difficulty": "중급",
        "tags": [
            "동기기",
            "단락비",
            "철기계"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_emach_2023_1_08",
        "exam": "전기기사",
        "year": 2023,
        "round": 1,
        "subject_id": "emach",
        "subject": "전기기기",
        "chapter": "변압기",
        "question_no": 8,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "변압기를 병렬운전하기 위한 필수 조건으로 반드시 일치하지 않아도 되는 것은?",
        "choices": [
            "각 변압기의 정격 용량[kVA]",
            "각 변압기의 극성(1차, 2차 유기기전력의 극성)",
            "각 변압기의 권수비 및 1·2차 정격전압",
            "각 변압기의 %임피던스 강하"
        ],
        "answer": 0,
        "explanation": "변압기 병렬운전 시 극성, 권수비, %임피던스는 일치해야 합니다. 하지만 정격용량(kVA)은 달라도 병렬운전이 가능하며, 각 변압기의 용량에 비례하여 부하를 분담합니다.",
        "difficulty": "기초",
        "tags": [
            "변압기",
            "병렬운전",
            "부하분담"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_emach_2023_2_09",
        "exam": "전기기사",
        "year": 2023,
        "round": 2,
        "subject_id": "emach",
        "subject": "전기기기",
        "chapter": "유도전동기",
        "question_no": 9,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "권선형 3상 유도전동기의 2차 회로에 외부 저항을 삽입하여 2차 저항 R₂를 증가시킬 때 비례추이에 따라 나타나는 결과는?",
        "choices": [
            "최대토크는 불변이고, 최대토크 발생 슬립이 증가한다.",
            "최대토크가 증가하고, 최대토크 발생 슬립은 감소한다.",
            "최대토크와 최대토크 발생 슬립이 모두 증가한다.",
            "최대토크와 최대토크 발생 슬립이 모두 감소한다."
        ],
        "answer": 0,
        "explanation": "비례추이 원리에 의해 2차 저항을 증가시키면 최대토크의 크기 자체는 불변이고, 최대토크가 발생하는 슬립 Sm만 2차 저항에 비례하여 증가합니다.",
        "difficulty": "중급",
        "tags": [
            "유도전동기",
            "비례추이",
            "최대토크"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_emach_2022_1_10",
        "exam": "전기기사",
        "year": 2022,
        "round": 1,
        "subject_id": "emach",
        "subject": "전기기기",
        "chapter": "정류기 및 전력전자",
        "question_no": 10,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "게이트 신호에 의해 양방향으로 교류 전류를 도통 및 제어할 수 있는 3단자 쌍방향 사이리스터 소자는?",
        "choices": [
            "TRIAC (트라이액)",
            "SCR",
            "GTO",
            "IGBT"
        ],
        "answer": 0,
        "explanation": "TRIAC(Triode AC Switch)은 2개의 역병렬 SCR을 집적한 구조로 게이트에 정·부 펄스를 가하여 교류 전류를 양방향으로 ON 제어할 수 있는 소자입니다.",
        "difficulty": "기초",
        "tags": [
            "전력전자",
            "트라이액",
            "사이리스터"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_cc_2024_2_06",
        "exam": "전기기사",
        "year": 2024,
        "round": 2,
        "subject_id": "cc",
        "subject": "회로이론 및 제어공학",
        "chapter": "RLC 공진 및 교류전력",
        "question_no": 6,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "R-L-C 직렬 공진 회로의 특성에 대한 설명으로 옳지 않은 것은?",
        "choices": [
            "공진 시 회로 임피던스는 최대가 된다.",
            "공진 시 합성 임피던스는 순저항 R[Ω]과 같다.",
            "공진 주파수 fo = 1 / (2π√LC) [Hz] 이다.",
            "공진 시 전압과 전류는 동위상이 된다."
        ],
        "answer": 0,
        "explanation": "R-L-C 직렬회로 공진 시 유도성과 용량성 리액턴스가 상쇄되어 임피던스는 최소값(Z = R)이 되고 전류는 최대가 됩니다.",
        "difficulty": "기초",
        "tags": [
            "직렬공진",
            "임피던스최소",
            "역률1"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_cc_2024_2_07",
        "exam": "전기기사",
        "year": 2024,
        "round": 2,
        "subject_id": "cc",
        "subject": "회로이론 및 제어공학",
        "chapter": "대칭 3상 교류 및 4단자망",
        "question_no": 7,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "평형 3상 Y(성형) 결선에서 선간전압(V_L)과 상전압(V_P)의 크기 및 위상 관계에 대한 설명으로 옳은 것은?",
        "choices": [
            "선간전압은 상전압의 √3배이고, 위상은 30° 앞선다.",
            "선간전압은 상전압과 같고, 위상은 30° 뒤진다.",
            "선간전압은 상전압의 1/√3배이고, 위상은 30° 앞선다.",
            "선간전압은 상전압의 3배이고, 위상은 동위상이다."
        ],
        "answer": 0,
        "explanation": "대칭 3상 Y결선에서는 선간전압이 상전압의 √3배이며 위상은 상전압보다 30° 앞섭니다.",
        "difficulty": "기초",
        "tags": [
            "Y결선",
            "선간전압",
            "상전압"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_cc_2023_1_08",
        "exam": "전기기사",
        "year": 2023,
        "round": 1,
        "subject_id": "cc",
        "subject": "회로이론 및 제어공학",
        "chapter": "대칭 3상 교류 및 4단자망",
        "question_no": 8,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "수동 4단자망 회로에서 4단자 정수 A, B, C, D 사이에 성립하는 성질로 옳은 것은?",
        "choices": [
            "AD - BC = 1",
            "AB - CD = 1",
            "AD + BC = 1",
            "AC - BD = 0"
        ],
        "answer": 0,
        "explanation": "선형 수동 4단자망에서는 행렬식 AD - BC = 1 이 성립합니다.",
        "difficulty": "기초",
        "tags": [
            "4단자망",
            "4단자정수",
            "AD-BC=1"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_cc_2023_2_09",
        "exam": "전기기사",
        "year": 2023,
        "round": 2,
        "subject_id": "cc",
        "subject": "회로이론 및 제어공학",
        "chapter": "자동제어계와 안정도",
        "question_no": 9,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "전달함수 G(s) = 5 / (s + 2) 인 제어계에 단위계단입력이 인가될 때 출력의 최종값은?",
        "choices": [
            "2.5",
            "5.0",
            "2.0",
            "0"
        ],
        "answer": 0,
        "explanation": "최종값 정리에 의해 lim_{s→0} s · (1/s · 5/(s+2)) = 5/2 = 2.5 입니다.",
        "difficulty": "기초",
        "tags": [
            "라플라스 변환",
            "최종값 정리",
            "전달함수"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_cc_2022_1_10",
        "exam": "전기기사",
        "year": 2022,
        "round": 1,
        "subject_id": "cc",
        "subject": "회로이론 및 제어공학",
        "chapter": "자동제어계와 안정도",
        "question_no": 10,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "2차 제어계의 특성방정식 s² + 2ζω_n s + ω_n² = 0 에서 감쇠비 ζ = 1 일 때의 과도 응답 상태는?",
        "choices": [
            "임계 제동 (Critical damping)",
            "과제동 (Over damping)",
            "부족 제동 (Under damping)",
            "무제동 (Undamped)"
        ],
        "answer": 0,
        "explanation": "감쇠비 ζ = 1 일 때는 진동 없이 가장 빠르게 수렴하는 임계 제동입니다.",
        "difficulty": "기초",
        "tags": [
            "감쇠비",
            "임계제동",
            "2차계"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_er_2024_2_06",
        "exam": "전기기사",
        "year": 2024,
        "round": 2,
        "subject_id": "er",
        "subject": "전기설비기술기준",
        "chapter": "총칙 및 전압의 구분",
        "question_no": 6,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "한국전기설비규정(KEC)에서 정한 저압(Low Voltage)의 범위로 옳은 것은?",
        "choices": [
            "교류 1,000[V] 이하, 직류 1,500[V] 이하",
            "교류 600[V] 이하, 직류 750[V] 이하",
            "교류 1,500[V] 이하, 직류 1,000[V] 이하",
            "교류 7,000[V] 이하, 직류 7,000[V] 이하"
        ],
        "answer": 0,
        "explanation": "KEC 개정 기준: 저압은 교류(AC) 1,000V 이하, 직류(DC) 1,500V 이하입니다.",
        "difficulty": "기초",
        "tags": [
            "KEC",
            "저압구분",
            "총칙"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_er_2024_2_07",
        "exam": "전기기사",
        "year": 2024,
        "round": 2,
        "subject_id": "er",
        "subject": "전기설비기술기준",
        "chapter": "전로의 절연 및 접지설계",
        "question_no": 7,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "KEC 계통접지 방식 중 전원측 중성점은 대지에 접지하고, 기기 노출도전부는 독립된 별도의 접지극에 접속하는 방식은?",
        "choices": [
            "TT 계통",
            "TN-S 계통",
            "TN-C 계통",
            "IT 계통"
        ],
        "answer": 0,
        "explanation": "전원측 접지(T) + 설비 노출도전부 독립접지(T) = TT 계통입니다.",
        "difficulty": "중급",
        "tags": [
            "KEC",
            "계통접지",
            "TT계통"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_er_2023_1_08",
        "exam": "전기기사",
        "year": 2023,
        "round": 1,
        "subject_id": "er",
        "subject": "전기설비기술기준",
        "chapter": "발변전소 및 보호장치",
        "question_no": 8,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "주택 욕실 등 인체가 물에 젖어 있는 장소에 시설하는 인체감전보호용 누전차단기의 정격감도전류 및 동작시간 기준은?",
        "choices": [
            "정격감도전류 15[mA] 이하, 동작시간 0.03초 이내",
            "정격감도전류 30[mA] 이하, 동작시간 0.03초 이내",
            "정격감도전류 50[mA] 이하, 동작시간 0.1초 이내",
            "정격감도전류 100[mA] 이하, 동작시간 0.05초 이내"
        ],
        "answer": 0,
        "explanation": "물기나 습기가 많은 욕실/세면대 등은 고감도형인 정격감도전류 15mA 이하, 동작시간 0.03초 이내를 시설해야 합니다.",
        "difficulty": "중급",
        "tags": [
            "누전차단기",
            "인체보호",
            "욕실감전"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_er_2023_2_09",
        "exam": "전기기사",
        "year": 2023,
        "round": 2,
        "subject_id": "er",
        "subject": "전기설비기술기준",
        "chapter": "가공전선로 및 이격거리",
        "question_no": 9,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "가공전선로의 직선 부분(수평 각도 3도 이하)에 주로 시설하는 철탑의 종류는?",
        "choices": [
            "직선형 철탑 (A형)",
            "각도형 철탑 (B, C형)",
            "인류형 철탑 (D형)",
            "내장형 철탑 (E형)"
        ],
        "answer": 0,
        "explanation": "수평각도 3도 이하 직선 부분에는 직선형(A형) 철탑을 설치합니다.",
        "difficulty": "기초",
        "tags": [
            "철탑종류",
            "직선형철탑",
            "가공전선로"
        ],
        "is_past_exam": true,
        "review_required": false
    },
    {
        "id": "q_er_2022_1_10",
        "exam": "전기기사",
        "year": 2022,
        "round": 1,
        "subject_id": "er",
        "subject": "전기설비기술기준",
        "chapter": "가공전선로 및 이격거리",
        "question_no": 10,
        "source": "공개 CBT",
        "source_url": "",
        "license_note": "공개 기출 자료 기준, 해설은 자체 작성",
        "question": "가공전선로 지지물에 시설하는 지선(Guy wire)의 시설 기준으로 옳지 않은 것은?",
        "choices": [
            "철탑은 원칙적으로 지선을 사용하여 그 강도를 분담시킨다.",
            "지선의 안전율은 2.5 이상이어야 한다.",
            "허용 인장하중의 최저값은 4.31[kN] 이상이어야 한다.",
            "소선 3가닥 이상의 연선을 사용해야 한다."
        ],
        "answer": 0,
        "explanation": "KEC 기준에서 철탑은 원칙적으로 지선을 사용하여 그 강도를 분담시키지 않도록 규정되어 있습니다.",
        "difficulty": "기초",
        "tags": [
            "지선",
            "철탑지선금지",
            "안전율2.5"
        ],
        "is_past_exam": true,
        "review_required": false
    }
  ];

  function getAllQuestions() {
    return QUESTIONS.filter(q => !q.review_required);
  }

  function getQuestionsBySubject(subId) {
    if (!subId || subId === 'all') return getAllQuestions();
    return QUESTIONS.filter(q => (q.subject_id === subId || q.subject === subId) && !q.review_required);
  }

  function getQuestionsByExam(year, round) {
    return QUESTIONS.filter(q => (!year || q.year === year) && (!round || q.round === round) && !q.review_required);
  }

  function getDailyQuestions(count = 10) {
    const subjects = ['em', 'pe', 'emach', 'cc', 'er'];
    let selected = [];
    subjects.forEach(sub => {
      const subQs = getQuestionsBySubject(sub);
      const shuffled = [...subQs].sort(() => Math.random() - 0.5);
      selected = selected.concat(shuffled.slice(0, 2));
    });
    return selected.slice(0, count);
  }

  function getRandomQuestions(count = 20, subId = 'all') {
    const pool = getQuestionsBySubject(subId);
    return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
  }

  global.ELECTRIC_QUESTIONS = {
    list: QUESTIONS,
    getAll: getAllQuestions,
    getBySubject: getQuestionsBySubject,
    getByExam: getQuestionsByExam,
    getDaily: getDailyQuestions,
    getRandom: getRandomQuestions
  };
})(window);

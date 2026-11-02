export const SITE_NAME = "세계대전이야기";
export const SITE_NAME_EN = "World War Stories";
export const SITE_MARK = "전";
export const SITE_TAGLINE = "1차·2차 세계대전을, 짧은 한국어로";
export const SITE_SUB =
  "원인, 진영, 전선, 연표, 쟁점, 전투, 인물, 전후 질서를 공부용으로 적습니다. 1914년의 제국 국경과 오늘날의 나라 모양을 구분하고, 그때 한반도는 따로 적습니다.";
export const BRAND_LINE = "나두 — 나의 모든 일상을 AI와 함께";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nadoo-worldwars.vercel.app";

export const SISTER_SITES_LABEL = "나두 역사·신화";

export const MYTH_URL = "https://nadoo-myth.vercel.app";
export const ILIAD_URL = "https://iliad-stories.vercel.app";
export const GREECE_URL = "https://greece-stories.vercel.app";
export const ROME_URL = "https://rome-stories.vercel.app";
export const EGYPT_URL = "https://egypt-stories.vercel.app";
export const PERSIA_URL = "https://persia-stories.vercel.app";
export const CHOSEN_URL = "https://the-chosen-korean.vercel.app";
export const PHILOSOPHY_URL = "https://philosophy-stories.vercel.app";
export const KOREA_URL = "https://korea-stories.vercel.app";
export const TIMELINE_URL = "https://nadoo-timeline.vercel.app";
export const HUB_URL = "https://tinalinkeom.vercel.app";
export const VIKING_URL = "https://viking-stories.vercel.app";
export const GERMANIC_URL = "https://germanic-stories.vercel.app";
export const WORLD_URL = "https://nadoo-world.vercel.app";
export const PEOPLE_URL = "https://nadoo-people.vercel.app";
export const CHECKLIST_URL = "https://movie-checklist-sigma.vercel.app/?list=worldwars";
export const USA_MOTORS_URL = "https://usa-motors.vercel.app";
export const BRITISH_MOTORS_URL = "https://british-motors.vercel.app";
export const ITALIAN_MOTORS_URL = "https://italian-motors.vercel.app";

export const SISTER_SITES = [
  { href: MYTH_URL, label: "나두신화", en: "Myth" },
  { href: ILIAD_URL, label: "일리아스이야기", en: "Iliad" },
  { href: GREECE_URL, label: "그리스이야기", en: "Greece" },
  { href: ROME_URL, label: "로마이야기", en: "Rome" },
  { href: GERMANIC_URL, label: "게르만이야기", en: "Germanic" },
  { href: VIKING_URL, label: "바이킹이야기", en: "Vikings" },
  { href: EGYPT_URL, label: "이집트이야기", en: "Egypt" },
  { href: PERSIA_URL, label: "페르시아이야기", en: "Persia" },
  { href: CHOSEN_URL, label: "더 초즌 · 성경", en: "The Chosen · Bible" },
  { href: PHILOSOPHY_URL, label: "철학이야기", en: "Philosophy" },
  { href: KOREA_URL, label: "대한민국이야기", en: "Korea" },
  { href: WORLD_URL, label: "나두세계", en: "World" },
  { href: TIMELINE_URL, label: "나두연표", en: "Timeline" },
  { href: HUB_URL, label: "나두 허브", en: "Nadoo Hub" },
] as const;

export const EXTRA_LINKS = [
  { href: CHECKLIST_URL, label: "영화 체크리스트", en: "Films" },
  { href: PEOPLE_URL, label: "나두인물", en: "People" },
  { href: USA_MOTORS_URL, label: "미국차 컬렉션", en: "USA Motors" },
  { href: BRITISH_MOTORS_URL, label: "브리티시 모터스", en: "British Motors" },
  { href: ITALIAN_MOTORS_URL, label: "이탈리안 모터스", en: "Italian Motors" },
  { href: HUB_URL, label: "Tina 링크", en: "Tina" },
] as const;

export const COUPANG_URL = "https://link.coupang.com/a/hsdzLh1vB6";
export const COUPANG_DISCLOSURE = "이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.";

export const NAV = [
  { href: "/summary", label: "요약" },
  { href: "/map", label: "진영" },
  { href: "/phases", label: "시기" },
  { href: "/timeline", label: "연표" },
  { href: "/issues", label: "쟁점" },
  { href: "/battles", label: "전투" },
  { href: "/people", label: "인물" },
  { href: "/aftermath", label: "전후" },
  { href: "/quiz", label: "퀴즈" },
  { href: "/films", label: "영화" },
  { href: "/sources", label: "출처" },
] as const;

export const HOME_SECTIONS = [
  { href: "/summary", en: "Summary", title: "한눈에 요약", desc: "전쟁마다 원인·경과·결과를 세 줄로 두고, 그 아래에 조금 긴 요약을 붙입니다." },
  { href: "/map", en: "Alliances", title: "진영 지도", desc: "협상국과 동맹국, 연합국과 추축국. 이탈리아·루마니아·불가리아의 전향과 참전 날짜." },
  { href: "/phases", en: "Phases", title: "시기별 정리", desc: "각 전쟁을 네다섯 시기로 나누고, 전선과 그 시기의 큰 사건을 적습니다." },
  { href: "/timeline", en: "Timeline", title: "연표", desc: "1914–1918, 1919–1939, 1939–1945. 옆칸은 ‘그때 한반도는?’입니다." },
  { href: "/issues", en: "Issues", title: "이슈·쟁점", desc: "사라예보, 7월 위기, 참호, 베르사유, 대공황, 유화, 홀로코스트, 진주만, 원자폭탄." },
  { href: "/battles", en: "Battles", title: "주요 전투", desc: "마르네부터 오키나와까지. 어느 전선이었고, 왜 공부해야 하는지." },
  { href: "/people", en: "People", title: "주요 인물", desc: "국가 원수와 지휘관. 얼굴 그림은 넣지 않습니다." },
  { href: "/aftermath", en: "Aftermath", title: "결과와 전후 질서", desc: "국경, 국제연맹, 국제연합, 냉전의 시작, 광복과 분단." },
  { href: "/bridge", en: "Bridge", title: "1차가 2차로 이어진 길", desc: "한 조약이 다음 전쟁을 예약하지는 않았습니다. 여러 조건이 겹친 과정을 적습니다." },
  { href: "/films", en: "Films", title: "관련 영화", desc: "1917, 서부 전선 이상 없다, 라이언 일병 구하기, 덩케르크, 쉰들러 리스트와 그 밖의 작품. 무엇을 그리고 무엇이 다른지." },
] as const;

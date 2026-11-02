import type { Film } from "@/data/types";

/** 실제 작품만. 불법 영상 주소는 적지 않습니다. 체크리스트 id는 영화 체크리스트의 worldwars 목록과 같습니다. */
export const films: Film[] = [
  { slug: "all-quiet-1930", war: "ww1", ko: "서부 전선 이상 없다", en: "All Quiet on the Western Front", year: 1930, kind: "영화", depicts: "서부 전선의 참호와 소모전. 레마르크 소설.", note: "특정 전투의 기록 영화가 아닙니다. 젊은 병사가 전선에서 지워지는 과정을 그립니다. 1930년작과 2022년작은 같은 소설의 다른 영화입니다.", battleSlug: "somme", issueSlug: "trenches" },
  { slug: "grand-illusion-1937", war: "ww1", ko: "위대한 환상", en: "La Grande Illusion", year: 1937, kind: "영화", depicts: "1차 대전 포로와 계급.", note: "르누아르 영화. 전투보다 포로 수용소와 유럽 귀족 장교의 세계를 다룹니다. 역사 기록이라기보다 전간기에 만든 반전 영화입니다." },
  { slug: "paths-of-glory-1957", war: "ww1", ko: "영광의 길", en: "Paths of Glory", year: 1957, kind: "영화", depicts: "1916년 프랑스군 내부의 군법과 무의미한 돌격.", note: "큐브릭 영화. 실존 재판을 그대로 재연한 것은 아니고, 프랑스군 항명과 본보기의 총살을 소재로 한 허구입니다.", battleSlug: "verdun", issueSlug: "trenches" },
  { slug: "lawrence-of-arabia-1962", war: "ww1", ko: "아라비아의 로렌스", en: "Lawrence of Arabia", year: 1962, kind: "영화", depicts: "오스만 제국에 맞선 아랍 반란과 T. E. 로렌스.", note: "중동 전선을 그립니다. 인물의 역할과 아랍 정치를 영웅담으로 키운 부분이 있어, 오스만 전선의 전부로 보면 안 됩니다." },
  { slug: "gallipoli-1981", war: "ww1", ko: "갈리폴리", en: "Gallipoli", year: 1981, kind: "영화", depicts: "1915년 갈리폴리의 호주·뉴질랜드 병사.", note: "피터 위어 영화. 상륙 작전의 실패와 젊은 병사의 죽음을 다룹니다. 작전 전체의 지휘 기록은 아닙니다.", battleSlug: "gallipoli" },
  { slug: "war-horse-2011", war: "ww1", ko: "워 호스", en: "War Horse", year: 2011, kind: "영화", depicts: "서부 전선과 군마.", note: "소설·연극을 바탕으로 한 허구입니다. 참호와 포격의 풍경을 보되, 한 말의 여정을 사실 기록으로 읽지 않습니다.", issueSlug: "trenches" },
  { slug: "they-shall-not-grow-old-2018", war: "ww1", ko: "그들은 늙지 않는다", en: "They Shall Not Grow Old", year: 2018, kind: "다큐", depicts: "영국 병사의 영상과 증언을 복원한 다큐멘터리.", note: "피터 잭슨이 제국전쟁박물관 영상을 채색·복원했습니다. 복원 자체가 해석이라는 비판이 있습니다. 극영화와는 다릅니다." },
  { slug: "1917-2019", war: "ww1", ko: "1917", en: "1917", year: 2019, kind: "영화", depicts: "1917년 4월 6일 서부 전선, 전령 두 사람의 이동.", note: "샘 멘데스 영화. 날짜는 독일군이 힌덴부르크 선으로 물러나던 무렵입니다. 한 테이크처럼 보이게 찍은 허구이고, 실존 작전 보고서는 아닙니다. 참호의 공간감을 보는 용도로 적습니다.", issueSlug: "trenches" },
  { slug: "all-quiet-2022", war: "ww1", ko: "서부 전선 이상 없다", en: "All Quiet on the Western Front", year: 2022, kind: "영화", depicts: "서부 전선과 1918년 휴전 직전.", note: "독일 제작. 소설에 없는 휴전 협상 장면을 넣었고, 결말은 원작과 다릅니다. 1930년작과 비교하면 각색의 차이가 보입니다.", battleSlug: "hundred-days", issueSlug: "trenches" },
  { slug: "casablanca-1942", war: "ww2", ko: "카사블랑카", en: "Casablanca", year: 1942, kind: "영화", depicts: "1941년 말 비시 프랑스령 모로코의 망명과 레지스탕스.", note: "전쟁 중에 만든 할리우드 영화입니다. 카사블랑카 전투의 기록은 아니고, 중립과 점령 사이의 분위기를 보여 줍니다." },
  { slug: "bridge-on-the-river-kwai-1957", war: "ww2", ko: "콰이 강의 다리", en: "The Bridge on the River Kwai", year: 1957, kind: "영화", depicts: "버마 철도와 포로 수용소.", note: "소설을 바탕으로 한 허구입니다. 태국-버마 철도에 연합군 포로와 아시아 노동자가 동원된 것은 사실이고, 영화의 장교와 결말은 창작입니다." },
  { slug: "longest-day-1962", war: "ww2", ko: "지상 최대의 작전", en: "The Longest Day", year: 1962, kind: "영화", depicts: "1944년 6월 6일 노르망디 상륙.", note: "코넬리우스 라이언의 취재를 바탕으로 여러 시점에서 디데이를 보여 줍니다. 압축과 영웅화가 있습니다.", battleSlug: "normandy" },
  { slug: "tora-tora-tora-1970", war: "ww2", ko: "도라 도라 도라", en: "Tora! Tora! Tora!", year: 1970, kind: "영화", depicts: "진주만 공격의 양측 준비와 당일.", note: "미국과 일본이 함께 만든 전쟁 영화로, 진주만(2001)보다 작전 경과에 가깝습니다. 그래도 극영화입니다.", battleSlug: "pearl-harbor", issueSlug: "pearl-harbor" },
  { slug: "das-boot-1981", war: "ww2", ko: "특전 U보트", en: "Das Boot", year: 1981, kind: "영화", depicts: "1941년 대서양의 독일 잠수함.", note: "대서양 전투의 잠수함 내부입니다. 승무원을 인간으로 그리되 전쟁을 정당화하지는 않습니다. 영화와 TV판이 있습니다.", issueSlug: "submarine" },
  { slug: "grave-of-the-fireflies-1988", war: "ww2", ko: "반딧불이의 묘", en: "Grave of the Fireflies", year: 1988, kind: "영화", depicts: "1945년 고베 공습 이후의 어린 남매.", note: "노사카 아키유키의 소설을 바탕으로 한 애니메이션. 도시 공습과 굶주림을 다룹니다. 전투 기록 영화가 아닙니다." },
  { slug: "empire-of-the-sun-1987", war: "ww2", ko: "태양의 제국", en: "Empire of the Sun", year: 1987, kind: "영화", depicts: "상하이의 일본군 수용소와 영국 소년.", note: "J. G. 밸러드 소설의 각색. 태평양 전쟁 초기 상하이의 외국인 사회가 무너지는 과정을 한 아이의 시선으로 봅니다." },
  { slug: "schindlers-list-1993", war: "ww2", ko: "쉰들러 리스트", en: "Schindler's List", year: 1993, kind: "영화", depicts: "크라쿠프의 유대인과 오스카르 쉰들러.", note: "실존 인물을 바탕으로 합니다. 한 사업가가 노동자로 빼낸 사람들의 이야기이고, 홀로코스트 전체의 구조는 아닙니다. 수용소의 절차를 공부 자료로 재구성하지 않는 것이 좋습니다.", issueSlug: "holocaust" },
  { slug: "stalingrad-1993", war: "ww2", ko: "스탈린그라드", en: "Stalingrad", year: 1993, kind: "영화", depicts: "스탈린그라드의 독일 병사.", note: "독일 영화. 시가전과 포위의 끝을 소대 규모로 봅니다. 작전 전체의 지도는 전투 항목이 더 정확합니다.", battleSlug: "stalingrad" },
  { slug: "saving-private-ryan-1998", war: "ww2", ko: "라이언 일병 구하기", en: "Saving Private Ryan", year: 1998, kind: "영화", depicts: "오마하 해변과 노르망디 상륙 이후의 분대.", note: "오프닝의 오마하 상륙은 디데이의 가장 힘든 구간을 재현하려 한 장면입니다. 라이언 형제를 찾는 임무는 허구입니다. 상륙의 전부는 아니고, 공수부대와 다른 해변은 거의 나오지 않습니다.", battleSlug: "normandy" },
  { slug: "thin-red-line-1998", war: "ww2", ko: "씬 레드 라인", en: "The Thin Red Line", year: 1998, kind: "영화", depicts: "과달카날.", note: "제임스 존스 소설의 각색. 1942–1943년 남태평양 전선의 분위기이고, 전술 기록은 아닙니다." },
  { slug: "life-is-beautiful-1997", war: "ww2", ko: "인생은 아름다워", en: "Life Is Beautiful", year: 1997, kind: "영화", depicts: "이탈리아 유대인 가족과 수용소.", note: "우화에 가깝습니다. 수용소의 실제 운영을 보여주는 영화로 쓰면 역사가 왜곡됩니다. 홀로코스트를 처음 접하는 자료로는 기록 영화와 책을 앞에 두는 편이 낫습니다.", issueSlug: "holocaust" },
  { slug: "enemy-at-the-gates-2001", war: "ww2", ko: "에너미 앳 더 게이트", en: "Enemy at the Gates", year: 2001, kind: "영화", depicts: "스탈린그라드의 저격수 바실리 자이체프.", note: "자이체프는 실존 인물이고, 결투 상대와 로맨스는 크게 각색되었습니다. 소련 선전의 영웅담을 다시 영화로 키운 작품으로 보는 것이 맞습니다.", battleSlug: "stalingrad" },
  { slug: "pearl-harbor-2001", war: "ww2", ko: "진주만", en: "Pearl Harbor", year: 2001, kind: "영화", depicts: "진주만 공격과 둘리틀 공습.", note: "러브 스토리가 중심이고 사실 오류가 많습니다. 공격의 경과는 「도라 도라 도라」와 전투 항목을 보는 편이 낫습니다.", battleSlug: "pearl-harbor", issueSlug: "pearl-harbor" },
  { slug: "band-of-brothers-2001", war: "ww2", ko: "밴드 오브 브라더스", en: "Band of Brothers", year: 2001, kind: "시리즈", depicts: "미 101공수사단 이지 중대. 노르망디에서 벌지, 독일까지.", note: "스티븐 앰브로즈의 책을 바탕으로 한 HBO 시리즈. 실존 중대의 경로를 따르되 인물과 에피소드는 압축됩니다. 디데이, 마켓 가든, 바스토뉴가 나옵니다.", battleSlug: "normandy" },
  { slug: "pianist-2002", war: "ww2", ko: "피아니스트", en: "The Pianist", year: 2002, kind: "영화", depicts: "바르샤바 게토와 피아니스트 브와디스와프 슈필만.", note: "슈필만의 회고를 바탕으로 합니다. 한 사람의 생존이고, 바르샤바 봉기 전체의 군사 기록은 아닙니다.", issueSlug: "holocaust" },
  { slug: "downfall-2004", war: "ww2", ko: "몰락", en: "Downfall", year: 2004, kind: "영화", depicts: "1945년 4월 베를린의 총통 벙커.", note: "히틀러의 마지막 날을 그립니다. 비서 트라우들의 회고에 기댄 부분이 있고, 인간으로 그린다는 비판과 함께 읽힙니다. 패전의 군사 전체는 베를린 전투 항목이 맡습니다.", battleSlug: "berlin" },
  { slug: "letters-from-iwo-jima-2006", war: "ww2", ko: "이오지마에서 온 편지", en: "Letters from Iwo Jima", year: 2006, kind: "영화", depicts: "이오지마의 일본군.", note: "쿠리바야시 다다미치의 편지를 소재로 합니다. 같은 해의 「아버지의 깃발」이 미군 쪽입니다. 전투의 사상 규모는 전투 항목을 보세요.", battleSlug: "iwo-jima" },
  { slug: "flags-of-our-fathers-2006", war: "ww2", ko: "아버지의 깃발", en: "Flags of Our Fathers", year: 2006, kind: "영화", depicts: "이오지마 성조기 사진과 미군 홍보.", note: "사진 한 장이 어떻게 영웅 신화가 되었는지를 다룹니다. 상륙 작전 그 자체보다 후방의 이야기 비중이 큽니다.", battleSlug: "iwo-jima" },
  { slug: "valkyrie-2008", war: "ww2", ko: "작전명 발키리", en: "Valkyrie", year: 2008, kind: "영화", depicts: "1944년 7월 20일 히틀러 암살 미수.", note: "슈타우펜베르크를 중심으로 한 극영화입니다. 폭탄이 실패하고 쿠데타가 무너진 큰 줄은 사실이고, 인물의 대사는 창작입니다." },
  { slug: "the-pacific-2010", war: "ww2", ko: "더 퍼시픽", en: "The Pacific", year: 2010, kind: "시리즈", depicts: "과달카날, 펠렐리우, 이오지마, 오키나와의 미 해병.", note: "밴드 오브 브라더스의 태평양 짝입니다. 여러 실존 인물의 회고를 엮습니다. 유럽 전선과 태평양의 차이가 보입니다.", battleSlug: "iwo-jima" },
  { slug: "darkest-hour-2017", war: "ww2", ko: "다키스트 아워", en: "Darkest Hour", year: 2017, kind: "영화", depicts: "1940년 5–6월 처칠의 총리 취임과 덩케르크.", note: "처칠이 런던 지하철에서 여론을 묻는 장면은 창작으로 널리 지적됩니다. 전시 내각의 강화 논쟁이라는 뼈대는 있습니다.", battleSlug: "dunkirk" },
  { slug: "dunkirk-2017", war: "ww2", ko: "덩케르크", en: "Dunkirk", year: 2017, kind: "영화", depicts: "1940년 5월 말–6월 초 덩케르크 철수.", note: "놀란 영화. 육지·바다·공중의 시간을 서로 다른 길이로 병치합니다. 철수의 규모는 맞고, 인물은 허구에 가깝습니다. 독일군의 얼굴은 거의 나오지 않습니다.", battleSlug: "dunkirk" },
  { slug: "hacksaw-ridge-2016", war: "ww2", ko: "핵소 고지", en: "Hacksaw Ridge", year: 2016, kind: "영화", depicts: "오키나와의 위생병 데스먼드 도스.", note: "무기를 들지 않고 부상병을 구한 실존 인물입니다. 전투 장면은 과장되고, 오키나와 주민의 피해는 중심에 없습니다.", battleSlug: "okinawa" },
  { slug: "imitation-game-2014", war: "ww2", ko: "이미테이션 게임", en: "The Imitation Game", year: 2014, kind: "영화", depicts: "블레츨리 파크와 에니그마.", note: "앨런 튜링의 전기 영화. 암호 해독이 대서양 전투와 연결되는 점은 중요하고, 인물 관계와 비밀 유지의 방식은 많이 각색되었습니다." },
  { slug: "fury-2014", war: "ww2", ko: "퓨리", en: "Fury", year: 2014, kind: "영화", depicts: "1945년 4월 독일 안의 미군 전차.", note: "허구의 전차 승무원입니다. 전쟁 말 서부 전선의 분위기이고 특정 전투의 기록은 아닙니다." },
  { slug: "come-and-see-1985", war: "ww2", ko: "컴 앤 씨", en: "Come and See", year: 1985, kind: "영화", depicts: "1943년 벨라루스의 독일 점령.", note: "클림 클리모프 영화. 민간인 학살을 소년의 시선으로 봅니다. 시청이 무겁습니다. 점령지의 폭력을 전투 영웅담과 구분하게 해 줍니다." },
  { slug: "jojo-rabbit-2019", war: "ww2", ko: "조조 래빗", en: "Jojo Rabbit", year: 2019, kind: "영화", depicts: "전쟁 말 독일의 소년과 나치 선전.", note: "풍자입니다. 히틀러가 상상 속 친구로 나옵니다. 역사 재현으로 보면 안 되고, 선전이 어떻게 아이들 말에 들어가는지를 비튼 작품입니다." },
  { slug: "midway-2019", war: "ww2", ko: "미드웨이", en: "Midway", year: 2019, kind: "영화", depicts: "1942년 6월 미드웨이 해전.", note: "암호 해독과 항모전의 큰 줄은 따르려 합니다. 인물 대사는 극적이고, 해전의 판단은 전투 항목이 더 짧고 정확합니다.", battleSlug: "midway" },
  { slug: "oppenheimer-2023", war: "ww2", ko: "오펜하이머", en: "Oppenheimer", year: 2023, kind: "영화", depicts: "맨해튼 계획과 원자폭탄의 정치.", note: "폭탄이 만들어진 과정의 과학 행정과 전후 청문회입니다. 히로시마의 피해 현장은 거의 보여 주지 않습니다. 만드는 세부는 공부 대상이 아닙니다.", issueSlug: "atomic" },
  { slug: "assassination-2015", war: "ww2", ko: "암살", en: "Assassination", year: 2015, kind: "영화", depicts: "1930년대–1945년 한국 독립운동과 친일.", note: "허구의 작전입니다. 임시정부와 의열 투쟁의 분위기를 빌렸고, 실존 인물의 전기는 아닙니다. 독립운동의 기록은 대한민국이야기에 있습니다.", issueSlug: "korea-1945" },
  { slug: "age-of-shadows-2016", war: "ww2", ko: "밀정", en: "The Age of Shadows", year: 2016, kind: "영화", depicts: "1920년대 일제강점기의 독립운동과 밀정.", note: "의열단을 느슨히 배경으로 한 허구입니다. 연도는 2차 대전 전이지만, 식민 통치가 전쟁으로 이어지는 자리를 보는 데 연결됩니다." },
  { slug: "battleship-island-2017", war: "ww2", ko: "군함도", en: "The Battleship Island", year: 2017, kind: "영화", depicts: "하시마(군함도)의 조선인 강제 동원.", note: "하시마에 조선인 노동자가 있었던 것은 사실입니다. 영화의 탈출극은 허구이고, 피해의 묘사를 둘러싼 논쟁이 있습니다. 기록과 극을 구분해야 합니다." },
  { slug: "ode-to-my-father-2014", war: "ww2", ko: "국제시장", en: "Ode to My Father", year: 2014, kind: "영화", depicts: "흥남 철수와 그 뒤의 한국 현대사.", note: "흥남 철수(1950)는 한국전쟁입니다. 이 목록에 둔 이유는 1945년 이후 분단과 전쟁이 한 가족의 이야기로 이어지는 자리를 보여 주기 때문입니다. 1·2차 대전의 전투 영화가 아닙니다.", issueSlug: "korea-1945" },
];

export function filmBySlug(slug: string) {
  return films.find((item) => item.slug === slug);
}

export function filmsForBattle(slug: string) {
  return films.filter((item) => item.battleSlug === slug);
}

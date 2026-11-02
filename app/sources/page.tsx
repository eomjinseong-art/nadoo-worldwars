import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { SITE_SUB, SITE_TAGLINE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "출처",
  description: "세계대전이야기가 날짜와 진영을 고른 기준. 조약, 참전일, 지도의 한계, 영화와 전설을 나누는 법.",
  path: "/sources",
});

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "출처", path: "/sources" }]), { "@type": "WebSite", name: "세계대전이야기", description: `${SITE_TAGLINE}. ${SITE_SUB}` }])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "출처" }]} />
      <h1 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">출처와 적는 기준</h1>
      <div className="mt-6 space-y-4 text-sm leading-7">
        <p>날짜는 그레고리력입니다. 러시아 혁명의 ‘2월’ ‘10월’처럼 당시 러시아력이 이름에 남은 사건은 그레고리력의 달을 본문에 적습니다. 선전포고와 휴전, 조약 서명은 각국 외교사에서 통용되는 날을 따릅니다.</p>
        <p>1차 대전의 뼈대는 1914년 7–8월의 외교 문서 흐름, 1918년 11월 11일 휴전, 1919년 베르사유를 비롯한 파리 강화 조약입니다. 오스트리아·헝가리·불가리아·오스만(튀르키예)은 독일과 다른 조약으로 처리되었다는 점을 빼먹지 않으려 했습니다.</p>
        <p>2차 대전의 유럽 개전은 1939년 9월 1일, 태평양 전쟁의 확대는 1941년 12월 7일, 중일전쟁의 시작은 1937년 7월로 나누어 적습니다. 하나의 시작일을 모든 전선에 억지로 씌우지 않습니다.</p>
        <p>진영 지도는 내추럴 어스의 오늘날 국경을 도식으로 쓴 것입니다. 1914년의 오스트리아-헝가리, 오스만, 러시아 제국, 식민지 경계와 같지 않습니다. 폴란드처럼 당시 한 나라로 없던 땅은 1차 대전 단계에서 일부러 비웠습니다. 이탈리아 북부의 살로 공화국처럼 한 나라가 둘로 갈린 경우도 한 색으로만 칠하고 글로 한계를 적습니다.</p>
        <p>홀로코스트의 유대인 희생 약 600만은 널리 쓰이는 연구 총계입니다. 다른 피해 집단의 숫자는 자료마다 달라 한 숫자로 고정하지 않았습니다. 살해의 절차와 무기의 제작, 제원은 적지 않습니다.</p>
        <p>한반도 항목은 1910년 병합, 1919년 3·1 운동과 임시정부, 1931년 이후의 대륙 침략과 동원, 1940년 창씨개명, 1943년 학병, 1944년 징병, 1945년 8월 15일 광복, 38도선 분할 점령이라는 통용되는 순서를 따릅니다. 임시정부 수립일의 세부 비정처럼 자료가 갈리는 곳은 갈린다고 적습니다.</p>
        <p>영화는 공개된 작품만 올립니다. 어느 전투를 배경으로 하는지와, 어디가 허구인지를 나누고, 시청 주소의 불법 사이트는 안내하지 않습니다. 확인이 약한 일화는 ‘전해지는 이야기’로만 표시합니다. 책의 문장을 번역해 붙이지 않았습니다.</p>
        <p>사상자의 정확한 총계는 집계 기관과 포함 범위에 따라 달라, ‘안팎’ ‘십만 명 단위’처럼 폭으로 적었습니다. 외울 숫자 하나보다 그 전투가 전선을 바꿨는지가 이 사이트의 기준입니다.</p>
      </div>
    </div>
  );
}

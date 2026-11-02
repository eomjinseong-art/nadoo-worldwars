import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { OutLinks } from "@/components/OutLinks";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { BRITISH_MOTORS_URL, ITALIAN_MOTORS_URL, KOREA_URL, USA_MOTORS_URL, WORLD_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "결과와 전후 질서",
  description: "국경의 변화, 국제연맹과 국제연합, 냉전의 시작, 한반도의 광복과 분단. 1차와 2차의 마무리를 나란히 둡니다.",
  path: "/aftermath",
});

const blocks = [
  {
    title: "국경",
    body: [
      "1차 대전 뒤 독일은 알자스-로렌을 잃고 동쪽에 폴란드 회랑이 생겼습니다. 오스트리아-헝가리는 오스트리아, 헝가리, 체코슬로바키아 등으로 나뉘었고 남슬라브는 유고슬라비아로 모였습니다. 오스만은 로잔 조약 이후의 튀르키예로 줄었고, 아랍 지역은 영국·프랑스의 위임통치로 넘어갔습니다. 러시아 제국은 소비에트 연방으로 체제가 바뀌었습니다.",
      "2차 대전 뒤 독일은 네 구역으로 나뉘었다가 1949년 서독과 동독이 됩니다. 폴란드의 국경은 서쪽으로 옮겨졌습니다. 소련은 동유럽에 영향권을 굳혔습니다. 일본은 점령을 받았고 식민지를 잃었습니다. 아시아와 아프리카의 독립은 이 패전 직후부터 본격화되지만, 하루아침에 끝나지는 않았습니다.",
    ],
  },
  {
    title: "국제연맹과 국제연합",
    body: [
      "1920년 국제연맹은 집단 안보를 말했습니다. 미국이 가입하지 않았고, 1930년대의 침략을 되돌리지 못했습니다. 1945년 10월 국제연합이 출범합니다. 안전보장이사회 상임이사국에 거부권을 둔 것은, 열강이 빠지면 조직이 멈춘다는 연맹의 경험을 반영한 설계입니다.",
      "뉘른베르크와 도쿄의 재판은 전쟁 범죄와 인도에 반한 죄를 전후 법의 언어로 남겼습니다. 재판의 승자가 판정한다는 비판과, 홀로코스트와 점령 범죄를 기록으로 남겼다는 의의는 같이 있습니다.",
    ],
  },
  {
    title: "냉전의 시작",
    body: [
      "1945년의 연합은 공동의 적이 사라지자 갈라졌습니다. 얄타와 포츠담에서 이미 동유럽과 독일 처리가 어긋났습니다. 1946년 처칠의 철의 장막 연설, 1947년 트루먼 독트린과 마셜 플랜, 1948년 베를린 봉쇄, 1949년 나토와 두 개의 독일, 중화인민공화국 수립이 이어집니다.",
      "이 사이트는 1945년 8월에서 본문을 닫습니다. 냉전의 사건 전체를 여기 적지는 않습니다. 다만 2차 대전의 마무리 방식이 그 대립의 출발이었다는 점만 표시합니다.",
    ],
  },
  {
    title: "광복과 분단",
    body: [
      "한반도에서 1945년 8월 15일은 광복입니다. 일본군 무장 해제를 위해 미군과 소련군이 38도선을 기준으로 남과 북을 나누어 들어왔습니다. 영구 국경으로 합의된 선은 아니었습니다. 1948년 남쪽과 북쪽에 서로 다른 정부가 서면서 분단이 제도가 됩니다.",
      "1950년의 한국전쟁은 그 다음 장입니다. 독립운동의 인물과 일제강점기의 궁궐 훼손은 대한민국이야기에, 오늘날의 남과 북 나라 카드는 나두세계에 있습니다.",
    ],
  },
  {
    title: "공장과 차",
    body: [
      "전쟁은 각국의 공장을 군수에 돌렸고, 전후에 그 산업이 민수용으로 돌아왔습니다. 무기 만드는 법은 적지 않습니다. 오늘날 그 나라 차의 이야기는 미국차 컬렉션, 브리티시 모터스, 이탈리안 모터스에 따로 있습니다.",
    ],
  },
];

export default function AftermathPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "전후", path: "/aftermath" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "전후" }]} />
      <h1 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">결과와 전후 질서</h1>
      <p className="mt-3 text-sm leading-7 text-muted">1차 대전의 마무리는 연맹과 불안정한 강화였고, 2차 대전의 마무리는 유엔과 냉전, 그리고 한반도의 분단이었습니다.</p>
      <div className="mt-8 space-y-8">
        {blocks.map((block) => (
          <section key={block.title}>
            <h2 className="font-serif text-2xl text-ink">{block.title}</h2>
            <div className="mt-3 space-y-3 text-sm leading-7">
              {block.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <OutLinks
        links={[
          { href: "/issues/versailles", label: "베르사유" },
          { href: "/issues/league", label: "국제연맹" },
          { href: "/issues/korea-1945", label: "광복과 분단" },
          { href: `${KOREA_URL}/defenders`, label: "대한민국이야기" },
          { href: `${WORLD_URL}/countries/kr`, label: "나두세계 · 한국" },
          { href: USA_MOTORS_URL, label: "미국차 컬렉션" },
          { href: BRITISH_MOTORS_URL, label: "브리티시 모터스" },
          { href: ITALIAN_MOTORS_URL, label: "이탈리안 모터스" },
        ]}
      />
    </div>
  );
}

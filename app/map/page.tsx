import { AllianceMap } from "@/components/AllianceMap";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WarTabs } from "@/components/WarTabs";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { WORLD_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "진영 지도",
  description: "1차 대전의 협상국·동맹국, 2차 대전의 연합국·추축국을 단계별로 칠합니다. 이탈리아·루마니아·불가리아의 전향과 미국·소련·일본의 참전 시점을 적습니다.",
  path: "/map",
});

export default function MapPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "진영 지도", path: "/map" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "진영 지도" }]} />
      <h1 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">진영 지도</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        단계를 바꾸면 색이 바뀝니다. 이탈리아, 루마니아, 불가리아는 전쟁 도중에 편을 바꿉니다. 미국과 일본, 러시아의 참전·이탈 날짜는 나라 설명에 적습니다. 오늘날의 나라 카드는{" "}
        <a className="text-laurel underline" href={WORLD_URL} target="_blank" rel="noopener noreferrer">
          나두세계
        </a>
        에 있습니다.
      </p>
      <div className="mt-8">
        <WarTabs
          tabs={[
            { id: "ww1", label: "1차 세계대전" },
            { id: "ww2", label: "2차 세계대전" },
          ]}
          panels={{
            ww1: <AllianceMap war="ww1" />,
            ww2: <AllianceMap war="ww2" />,
          }}
        />
      </div>
    </div>
  );
}

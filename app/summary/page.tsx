import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WarTabs } from "@/components/WarTabs";
import { bridgeParagraphs, summaries } from "@/data/summary";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "한눈에 요약",
  description: "1차·2차 세계대전의 원인, 경과, 결과를 세 줄로 적고, 그 아래에 조금 긴 요약을 붙입니다. 1차가 2차로 이어진 이유도 나눕니다.",
  path: "/summary",
});

function Card({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-lg border border-line bg-card p-5">
      <h3 className="font-serif text-xl text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
    </article>
  );
}

function WarSummary({ war }: { war: "ww1" | "ww2" }) {
  const item = summaries.find((summary) => summary.war === war);
  if (!item) return null;
  return (
    <div>
      <p className="text-xs tracking-[0.16em] text-terra">{item.years}</p>
      <h2 className="mt-1 font-serif text-3xl text-ink">{item.title}</h2>
      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        <Card title="원인" text={item.cause} />
        <Card title="경과" text={item.course} />
        <Card title="결과" text={item.result} />
      </div>
      <div className="mt-6 space-y-3 text-sm leading-7">
        {item.more.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default function SummaryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "요약", path: "/summary" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "요약" }]} />
      <h1 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">한눈에 요약</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">세 줄은 암기용입니다. 그 아래 문단은 세 줄이 지우는 예외를 되살립니다. 이탈리아와 일본은 두 전쟁에서 같은 편에 서 있지 않습니다.</p>
      <div className="mt-8">
        <WarTabs
          tabs={[
            { id: "ww1", label: "1차 세계대전" },
            { id: "ww2", label: "2차 세계대전" },
            { id: "bridge", label: "1차가 2차로" },
          ]}
          panels={{
            ww1: <WarSummary war="ww1" />,
            ww2: <WarSummary war="ww2" />,
            bridge: (
              <div>
                <h2 className="font-serif text-3xl text-ink">한 조약이 다음 전쟁을 예약하지 않습니다</h2>
                <div className="mt-4 space-y-3 text-sm leading-7">
                  {bridgeParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Link href="/bridge" className="mt-4 inline-block text-sm text-terra">
                  이 설명을 따로 보기 →
                </Link>
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
}

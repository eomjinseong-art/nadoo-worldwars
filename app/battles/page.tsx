import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WarTabs } from "@/components/WarTabs";
import { battles } from "@/data/battles";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "주요 전투",
  description: "마르네, 갈리폴리, 베르됭, 솜, 덩케르크, 진주만, 스탈린그라드, 노르망디, 베를린, 오키나와. 전선과 결과, 왜 중요한지.",
  path: "/battles",
});

function List({ war }: { war: "ww1" | "ww2" }) {
  return (
    <ul className="grid gap-4">
      {battles
        .filter((battle) => battle.war === war)
        .map((battle) => (
          <li key={battle.slug}>
            <Link href={`/battles/${battle.slug}`} className="block rounded-lg border border-line bg-card p-5 hover:border-terra">
              <p className="text-xs text-terra">
                {battle.when} · {battle.front}
              </p>
              <h2 className="mt-1 font-serif text-2xl text-ink">
                {battle.title} <span className="text-base text-muted">{battle.en}</span>
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">{battle.why}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default function BattlesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "전투", path: "/battles" },
          ]),
          itemListLd(
            "주요 전투",
            "/battles",
            battles.map((battle) => ({ name: battle.title, path: `/battles/${battle.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "전투" }]} />
      <h1 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">주요 전투</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">승패의 한 줄보다, 어느 전선에서 무엇이 바뀌었는지를 적습니다. 관련 영화는 각 전투 안에 붙입니다.</p>
      <div className="mt-8">
        <WarTabs
          tabs={[
            { id: "ww1", label: "1차 세계대전" },
            { id: "ww2", label: "2차 세계대전" },
          ]}
          panels={{ ww1: <List war="ww1" />, ww2: <List war="ww2" /> }}
        />
      </div>
    </div>
  );
}

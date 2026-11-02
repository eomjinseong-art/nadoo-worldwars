import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WarTabs } from "@/components/WarTabs";
import { people } from "@/data/people";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";
import { PEOPLE_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "주요 인물",
  description: "1차·2차 세계대전의 국가 원수와 지휘관. 초상화는 넣지 않고, 그 사람이 왜 연표에 있어야 하는지만 적습니다.",
  path: "/people",
});

function List({ war }: { war: "ww1" | "ww2" | "both" }) {
  const items = people.filter((person) => (war === "both" ? person.war === "both" : person.war === war || person.war === "both"));
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((person) => (
        <li key={person.slug}>
          <Link href={`/people/${person.slug}`} className="block h-full rounded-lg border border-line bg-card p-5 hover:border-terra">
            <p className="text-xs text-terra">
              {person.side} · {person.years}
            </p>
            <h2 className="mt-1 font-serif text-2xl text-ink">{person.name}</h2>
            <p className="text-sm text-muted">{person.role}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{person.why}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function PeoplePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "인물", path: "/people" },
          ]),
          itemListLd(
            "주요 인물",
            "/people",
            people.map((person) => ({ name: person.name, path: `/people/${person.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "인물" }]} />
      <h1 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">주요 인물</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        실존 인물의 얼굴은 만들지 않습니다. 공개된 초상도 여기에 붙이지 않고, 역할과 날짜만 적습니다. 다른 시대의 인물 사전은{" "}
        <a className="text-laurel underline" href={PEOPLE_URL} target="_blank" rel="noopener noreferrer">
          나두인물
        </a>
        에 있습니다.
      </p>
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

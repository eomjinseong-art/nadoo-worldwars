import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { issues } from "@/data/issues";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "이슈·쟁점",
  description: "사라예보, 7월 위기, 참호전, 베르사유, 대공황, 유화, 독소 조약, 홀로코스트, 진주만, 원자폭탄, 광복. 왜 시험에 나오는 쟁점인지.",
  path: "/issues",
});

const label = { ww1: "1차", ww2: "2차", bridge: "전간·연결" } as const;

export default function IssuesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "쟁점", path: "/issues" },
          ]),
          itemListLd(
            "이슈·쟁점",
            "/issues",
            issues.map((item) => ({ name: item.title, path: `/issues/${item.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "쟁점" }]} />
      <h1 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">이슈·쟁점</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">전투의 승패와 다른 질문입니다. 각 항목은 왜 그 사건이 두 전쟁의 설명에서 빠지면 안 되는지를 앞에 둡니다.</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {issues.map((item) => (
          <li key={item.slug}>
            <Link href={`/issues/${item.slug}`} className="block h-full rounded-lg border border-line bg-card p-5 hover:border-terra">
              <p className="text-[11px] tracking-[0.14em] text-terra">
                {label[item.war]} · {item.when}
              </p>
              <h2 className="mt-1 font-serif text-2xl text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{item.why}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

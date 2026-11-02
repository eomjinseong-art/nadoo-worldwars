import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WarTabs } from "@/components/WarTabs";
import { timeline, timelineGroups } from "@/data/timeline";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { KOREA_URL, TIMELINE_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "연표",
  description: "1914–1918, 1919–1939, 1939–1945 세로 연표. 옆칸은 그때 한반도입니다.",
  path: "/timeline",
});

function Column({ id }: { id: "ww1" | "inter" | "ww2" }) {
  const rows = timeline.filter((row) => row.war === id);
  return (
    <ol className="relative space-y-4 border-l border-line pl-4">
      {rows.map((row) => (
        <li key={row.sort} className="grid gap-2 md:grid-cols-2">
          <div>
            <p className="font-serif text-terra">{row.when}</p>
            {row.href ? (
              <a href={row.href} className="mt-1 block text-sm leading-7 text-ink underline decoration-line underline-offset-4" {...(row.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {row.text}
              </a>
            ) : (
              <p className="mt-1 text-sm leading-7 text-ink">{row.text}</p>
            )}
          </div>
          <p className="rounded-md bg-stone/70 px-3 py-2 text-sm leading-7 text-muted">
            <span className="mr-2 text-[11px] tracking-[0.14em] text-terra">그때 한반도는?</span>
            {row.korea}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default function TimelinePage() {
  const panels = Object.fromEntries(timelineGroups.map((group) => [group.id, <Column key={group.id} id={group.id} />]));
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "연표", path: "/timeline" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "연표" }]} />
      <h1 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">연표</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        왼쪽은 세계이고 오른쪽 칸은 한반도입니다. 같은 해라고 해서 원인이 같지는 않습니다. 더 긴 비교는{" "}
        <a className="text-laurel underline" href={TIMELINE_URL} target="_blank" rel="noopener noreferrer">
          나두연표
        </a>
        , 독립운동의 인물은{" "}
        <a className="text-laurel underline" href={`${KOREA_URL}/defenders`} target="_blank" rel="noopener noreferrer">
          대한민국이야기
        </a>
        에 있습니다.
      </p>
      <div className="mt-8">
        <WarTabs
          label="연표 구간"
          tabs={timelineGroups.map((group) => ({ id: group.id, label: `${group.title} ${group.years}` }))}
          panels={panels}
        />
      </div>
    </div>
  );
}

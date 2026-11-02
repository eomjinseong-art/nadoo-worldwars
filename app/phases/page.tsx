import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WarTabs } from "@/components/WarTabs";
import { phases } from "@/data/phases";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "시기별 정리",
  description: "1차 세계대전 다섯 시기, 2차 세계대전 다섯 시기. 전선이 어디였고 그 해에 무엇이 바뀌었는지.",
  path: "/phases",
});

function List({ war }: { war: "ww1" | "ww2" }) {
  const items = phases.filter((phase) => phase.war === war);
  return (
    <ol className="space-y-4">
      {items.map((phase, index) => (
        <li key={phase.id} className="rounded-lg border border-line bg-card p-5">
          <p className="text-xs tracking-[0.16em] text-terra">
            {String(index + 1).padStart(2, "0")} · {phase.years}
          </p>
          <h2 className="mt-1 font-serif text-2xl text-ink">{phase.title}</h2>
          <p className="mt-2 text-sm text-muted">{phase.front}</p>
          <p className="mt-3 text-sm leading-7">{phase.summary}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-muted">
            {phase.events.map((event) => (
              <li key={event}>{event}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export default function PhasesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "시기", path: "/phases" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "시기" }]} />
      <h1 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">시기별 정리</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">각 전쟁을 다섯 시기로 나눕니다. 해는 암기보다, 그 시기에 전선이 어디였는지를 앞에 둡니다.</p>
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

"use client";

import { useMemo, useState } from "react";
import paths from "@/data/map-paths.json";
import { KO_NAME, mapPhases, SIDE_META, SWITCHERS, type Side } from "@/data/alliances";

type Feature = { id: string; name: string; d: string };

const features = paths as Feature[];

export function AllianceMap({ war }: { war: "ww1" | "ww2" }) {
  const phases = mapPhases.filter((phase) => phase.war === war);
  const [phaseId, setPhaseId] = useState(phases[0]?.id ?? "");
  const [selected, setSelected] = useState<string | null>(null);
  const phase = phases.find((item) => item.id === phaseId) ?? phases[0];

  const groups = useMemo(() => {
    if (!phase) return [];
    const buckets = new Map<Side, string[]>();
    for (const [id, side] of Object.entries(phase.sides)) {
      const list = buckets.get(side) ?? [];
      list.push(KO_NAME[id] ?? id);
      buckets.set(side, list);
    }
    return [...buckets.entries()];
  }, [phase]);

  if (!phase) return null;

  const selectedName = selected ? KO_NAME[selected] ?? features.find((item) => item.id === selected)?.name ?? selected : null;
  const selectedSide = selected ? phase.sides[selected] : undefined;

  return (
    <div>
      <div role="tablist" aria-label="진영 단계" className="flex gap-2 overflow-x-auto pb-2">
        {phases.map((item) => {
          const on = item.id === phase.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => {
                setPhaseId(item.id);
                setSelected(null);
              }}
              className={`shrink-0 rounded-full px-3 py-2 text-sm ${on ? "bg-ink text-bg" : "border border-line bg-card"}`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-sm leading-7 text-muted">{phase.blurb}</p>
      <div className="mt-4 overflow-hidden rounded-lg border border-line bg-[#d7e4ea]">
        <svg viewBox="0 0 1000 520" role="img" aria-label={`${phase.label} 진영 지도`} className="h-auto w-full">
          <rect width="1000" height="520" fill="#d7e4ea" />
          {features.map((feature) => {
            const side = phase.sides[feature.id];
            const fill = side ? SIDE_META[side].fill : "#e7e1d6";
            const on = selected === feature.id;
            return (
              <path
                key={feature.id}
                d={feature.d}
                fill={on ? "#241c16" : fill}
                stroke="#fff"
                strokeWidth={0.4}
                className="cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label={KO_NAME[feature.id] ?? feature.name}
                onClick={() => setSelected(feature.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelected(feature.id);
                  }
                }}
              >
                <title>{KO_NAME[feature.id] ?? feature.name}</title>
              </path>
            );
          })}
        </svg>
      </div>
      <p className="mt-2 text-xs leading-5 text-muted">
        나라 모양은 오늘날의 국경입니다. 오스트리아-헝가리, 오스만, 러시아 제국, 식민지는 오늘날 나라로 대략만 칠했습니다. 폴란드·우크라이나처럼 1914년에 한 나라로 존재하지 않던 땅은 1차 대전 지도에서 일부러 비워 둔 곳이 있습니다.
      </p>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-line bg-card p-4 text-sm leading-7">
          <h3 className="font-serif text-xl text-ink">{selectedName ?? "나라를 눌러 보세요"}</h3>
          {selectedSide ? (
            <p className="mt-1 text-terra">{SIDE_META[selectedSide].label}</p>
          ) : selected ? (
            <p className="mt-1 text-muted">이 단계의 주요 교전국으로 칠하지 않았습니다.</p>
          ) : (
            <p className="mt-1 text-muted">색은 그 시점의 편입니다. 전향국은 단계가 바뀌면 색이 바뀝니다.</p>
          )}
          {selected && phase.notes[selected] ? <p className="mt-2">{phase.notes[selected]}</p> : null}
          {selected && (selected === "410" || selected === "408") ? (
            <p className="mt-2">
              한반도는 1910년부터 1945년 8월까지 일본의 식민지입니다.{" "}
              <a className="text-laurel underline" href="https://korea-stories.vercel.app/defenders">
                대한민국이야기
              </a>
              에서 독립운동을,{" "}
              <a className="text-laurel underline" href="/timeline">
                연표
              </a>
              에서 ‘그때 한반도는?’을 보세요.
            </p>
          ) : null}
        </div>
        <ul className="flex flex-wrap gap-2 text-xs">
          {(war === "ww1" ? (["entente", "central", "neutral", "out", "colony"] as Side[]) : (["allies", "axis", "occupied", "pact", "cobelligerent", "neutral", "colony"] as Side[])).map(
            (side) => (
              <li key={side} className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1">
                <span aria-hidden className="h-2.5 w-2.5 rounded-full" style={{ background: SIDE_META[side].fill }} />
                {SIDE_META[side].label}
              </li>
            ),
          )}
        </ul>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {groups.map(([side, names]) => (
          <section key={side} className="rounded-md border border-line bg-bg px-3 py-2 text-sm">
            <h3 className="font-serif text-terra">{SIDE_META[side].label}</h3>
            <p className="mt-1 leading-6 text-muted">{names.join(" · ")}</p>
          </section>
        ))}
      </div>
      <section className="mt-6" aria-labelledby="switchers-heading">
        <h3 id="switchers-heading" className="font-serif text-xl text-ink">
          편을 바꾸거나 늦게 들어온 나라
        </h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="text-xs text-muted">
              <tr>
                <th className="py-2 pr-3 font-medium">나라</th>
                <th className="py-2 pr-3 font-medium">1차</th>
                <th className="py-2 font-medium">2차</th>
              </tr>
            </thead>
            <tbody>
              {SWITCHERS.map((row) => (
                <tr key={row.name} className="border-t border-line">
                  <td className="py-2 pr-3 text-ink">{row.name}</td>
                  <td className="py-2 pr-3 text-muted">{row.ww1}</td>
                  <td className="py-2 text-muted">{row.ww2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState, type ReactNode } from "react";

export function WarTabs({
  tabs,
  panels,
  label = "전쟁",
}: {
  tabs: { id: string; label: string }[];
  panels: Record<string, ReactNode>;
  label?: string;
}) {
  const [current, setCurrent] = useState(tabs[0]?.id ?? "");
  return (
    <div>
      <div role="tablist" aria-label={label} className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const on = tab.id === current;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setCurrent(tab.id)}
              className={`rounded-full px-4 py-2 text-sm ${on ? "bg-terra font-semibold text-white" : "border border-line bg-card text-ink hover:border-terra"}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-6" role="tabpanel">
        {panels[current]}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import type { QuizItem } from "@/data/types";

export function Quiz({ items }: { items: QuizItem[] }) {
  const [picked, setPicked] = useState<Record<number, number>>({});
  const [show, setShow] = useState(false);
  const answered = Object.keys(picked).length;
  const score = items.reduce((sum, item, index) => sum + (picked[index] === item.answer ? 1 : 0), 0);

  return (
    <div>
      <ol className="space-y-4">
        {items.map((item, index) => {
          const choice = picked[index];
          const revealed = show || choice !== undefined;
          return (
            <li key={item.q} className="rounded-lg border border-line bg-card p-4 text-sm leading-7">
              <p className="font-serif text-base text-ink">
                {index + 1}. {item.q}
              </p>
              <ul className="mt-2 space-y-1">
                {item.options.map((option, optionIndex) => {
                  const on = choice === optionIndex;
                  const correct = revealed && optionIndex === item.answer;
                  const wrong = revealed && on && optionIndex !== item.answer;
                  return (
                    <li key={option}>
                      <button
                        type="button"
                        onClick={() => setPicked((prev) => ({ ...prev, [index]: optionIndex }))}
                        className={`w-full rounded-md border px-3 py-2 text-left ${
                          correct ? "border-laurel bg-laurel/10" : wrong ? "border-terra bg-terra/10" : on ? "border-terra" : "border-line hover:border-terra"
                        }`}
                      >
                        {String.fromCharCode(65 + optionIndex)}. {option}
                      </button>
                    </li>
                  );
                })}
              </ul>
              {revealed ? (
                <p className="mt-2 text-muted">
                  정답 {String.fromCharCode(65 + item.answer)}. {item.why}
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => setShow(true)} className="rounded-full bg-terra px-4 py-2 text-sm text-white">
          전체 해설 보기
        </button>
        <button
          type="button"
          onClick={() => {
            setPicked({});
            setShow(false);
          }}
          className="rounded-full border border-line bg-card px-4 py-2 text-sm"
        >
          다시 풀기
        </button>
        <p className="text-sm text-muted">
          {show ? `${score} / ${items.length}` : `${answered} / ${items.length} 응답`}
        </p>
      </div>
    </div>
  );
}

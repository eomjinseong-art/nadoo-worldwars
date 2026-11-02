import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CoupangCard } from "@/components/CoupangCard";
import { JsonLd } from "@/components/JsonLd";
import { WarTabs } from "@/components/WarTabs";
import { films } from "@/data/films";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { CHECKLIST_URL, TIMELINE_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "관련 영화",
  description: "1917, 서부 전선 이상 없다, 라이언 일병 구하기, 덩케르크, 쉰들러 리스트, 피아니스트, 밴드 오브 브라더스 등. 어느 전투를 그리고 어디가 각색인지.",
  path: "/films",
});

function List({ war }: { war: "ww1" | "ww2" }) {
  return (
    <ul className="space-y-4">
      {films
        .filter((film) => film.war === war)
        .map((film) => (
          <li key={film.slug} id={film.slug} className="scroll-mt-36 rounded-lg border border-line bg-card p-5">
            <p className="text-xs text-terra">
              {film.year} · {film.kind}
            </p>
            <h2 className="mt-1 font-serif text-2xl text-ink">
              {film.ko} <span className="text-base text-muted">{film.en}</span>
            </h2>
            <p className="mt-2 text-sm leading-7">그리는 것 · {film.depicts}</p>
            <p className="mt-2 text-sm leading-7 text-muted">{film.note}</p>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {film.battleSlug ? (
                <a className="text-laurel underline" href={`/battles/${film.battleSlug}`}>
                  관련 전투
                </a>
              ) : null}
              {film.issueSlug ? (
                <a className="text-laurel underline" href={`/issues/${film.issueSlug}`}>
                  관련 쟁점
                </a>
              ) : null}
              <a className="text-terra underline" href={CHECKLIST_URL} target="_blank" rel="noopener noreferrer">
                영화 체크리스트
              </a>
            </p>
          </li>
        ))}
    </ul>
  );
}

export default function FilmsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "영화", path: "/films" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "영화" }]} />
      <h1 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">관련 영화</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        실제로 있는 작품만 적습니다. 무엇을 그리는지와, 기록과 다른 점을 나눕니다. 불법 영상은 안내하지 않습니다. 시청 체크는{" "}
        <a className="text-laurel underline" href={CHECKLIST_URL} target="_blank" rel="noopener noreferrer">
          영화 체크리스트
        </a>
        , 이야기 속 해의 다른 역사 영화는{" "}
        <a className="text-laurel underline" href={`${TIMELINE_URL}/films`} target="_blank" rel="noopener noreferrer">
          나두연표
        </a>
        에 있습니다.
      </p>
      <CoupangCard />
      <WarTabs
        tabs={[
          { id: "ww1", label: "1차 세계대전" },
          { id: "ww2", label: "2차 세계대전" },
        ]}
        panels={{ ww1: <List war="ww1" />, ww2: <List war="ww2" /> }}
      />
    </div>
  );
}

import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { OutLinks } from "@/components/OutLinks";
import { battleBySlug, battles } from "@/data/battles";
import { filmsForBattle } from "@/data/films";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { CHECKLIST_URL } from "@/lib/site";

export function generateStaticParams() {
  return battles.map((battle) => ({ slug: battle.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const battle = battleBySlug(slug);
  if (!battle) return {};
  return pageMetadata({
    title: battle.title,
    description: `${battle.when}. ${battle.why}`,
    path: `/battles/${battle.slug}`,
    type: "article",
  });
}

export default async function BattlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const battle = battleBySlug(slug);
  if (!battle) notFound();
  const path = `/battles/${battle.slug}`;
  const related = filmsForBattle(battle.slug);
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "전투", path: "/battles" },
            { name: battle.title, path },
          ]),
          articleLd({ headline: battle.title, description: battle.why, path, about: [battle.en] }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/battles", label: "전투" }, { label: battle.title }]} />
      <p className="mt-4 text-xs tracking-[0.16em] text-terra">{battle.en}</p>
      <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">{battle.title}</h1>
      <p className="mt-2 text-sm text-muted">
        {battle.when} · {battle.front}
      </p>
      <p className="mt-4 text-sm leading-7">{battle.why}</p>
      <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        <div className="rounded-md border border-line px-3 py-2">
          <dt className="text-xs text-muted">양쪽</dt>
          <dd>{battle.sides}</dd>
        </div>
        <div className="rounded-md border border-line px-3 py-2">
          <dt className="text-xs text-muted">결과</dt>
          <dd>{battle.result}</dd>
        </div>
      </dl>
      <div className="mt-4 space-y-3 text-sm leading-7">
        {battle.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <aside className="mt-4 rounded-md border border-line bg-card p-4 text-sm leading-7">
        <p className="text-[11px] tracking-[0.14em] text-terra">그때 한반도는?</p>
        <p className="mt-1">{battle.korea}</p>
      </aside>
      {related.length ? (
        <section className="mt-6">
          <h2 className="font-serif text-xl">이 전투를 그린 영화</h2>
          <ul className="mt-2 space-y-2 text-sm">
            {related.map((film) => (
              <li key={film.slug}>
                <a href={`/films#${film.slug}`} className="text-laurel underline">
                  {film.ko} ({film.year})
                </a>
                <span className="text-muted"> — {film.note}</span>
              </li>
            ))}
          </ul>
          <a className="mt-2 inline-block text-sm text-terra" href={CHECKLIST_URL} target="_blank" rel="noopener noreferrer">
            영화 체크리스트에서 이어 보기 →
          </a>
        </section>
      ) : null}
      <OutLinks links={battle.links} />
    </article>
  );
}

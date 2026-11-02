import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { OutLinks } from "@/components/OutLinks";
import { issueBySlug, issues } from "@/data/issues";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return issues.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = issueBySlug(slug);
  if (!item) return {};
  return pageMetadata({ title: item.title, description: item.why, path: `/issues/${item.slug}`, type: "article" });
}

export default async function IssuePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = issueBySlug(slug);
  if (!item) notFound();
  const path = `/issues/${item.slug}`;
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "쟁점", path: "/issues" },
            { name: item.title, path },
          ]),
          articleLd({ headline: item.title, description: item.why, path, about: [item.en] }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/issues", label: "쟁점" }, { label: item.title }]} />
      <p className="mt-4 text-xs tracking-[0.16em] text-terra">{item.en}</p>
      <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">{item.title}</h1>
      <p className="mt-2 text-sm text-muted">{item.when}</p>
      <p className="mt-4 text-sm leading-7">{item.why}</p>
      <div className="mt-4 space-y-3 text-sm leading-7">
        {item.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {item.anecdote ? (
        <aside className="mt-6 rounded-md border border-line bg-stone/60 p-4 text-sm leading-7">
          <p className="text-[11px] tracking-[0.14em] text-terra">전해지는 이야기</p>
          <p className="mt-1">{item.anecdote}</p>
        </aside>
      ) : null}
      {item.korea ? (
        <aside className="mt-4 rounded-md border border-line bg-card p-4 text-sm leading-7">
          <p className="text-[11px] tracking-[0.14em] text-terra">그때 한반도는?</p>
          <p className="mt-1">{item.korea}</p>
        </aside>
      ) : null}
      <OutLinks links={item.links} />
    </article>
  );
}

import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { OutLinks } from "@/components/OutLinks";
import { people, personBySlug } from "@/data/people";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return people.map((person) => ({ slug: person.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = personBySlug(slug);
  if (!person) return {};
  return pageMetadata({
    title: person.name,
    description: `${person.role}. ${person.why}`,
    path: `/people/${person.slug}`,
    type: "article",
  });
}

export default async function PersonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = personBySlug(slug);
  if (!person) notFound();
  const path = `/people/${person.slug}`;
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "인물", path: "/people" },
            { name: person.name, path },
          ]),
          articleLd({ headline: person.name, description: person.why, path, about: [person.en, person.role] }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/people", label: "인물" }, { label: person.name }]} />
      <p className="mt-4 text-xs tracking-[0.16em] text-terra">{person.en}</p>
      <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">{person.name}</h1>
      <p className="mt-2 text-sm text-muted">
        {person.role} · {person.side} · {person.years}
      </p>
      <p className="mt-4 rounded-md border border-dashed border-line px-3 py-2 text-xs text-muted">초상은 두지 않습니다. 실존 인물의 얼굴을 만들거나, 출처가 불분명한 그림을 붙이지 않습니다.</p>
      <p className="mt-4 text-sm leading-7">{person.why}</p>
      <div className="mt-4 space-y-3 text-sm leading-7">
        {person.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <OutLinks links={person.links} />
    </article>
  );
}

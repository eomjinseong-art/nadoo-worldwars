import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { bridgeParagraphs } from "@/data/summary";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { PHILOSOPHY_URL, TIMELINE_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "1차가 2차로",
  description: "베르사유, 대공황, 국제연맹의 실패, 유화, 독소 불가침이 어떻게 겹쳐 1939년의 전쟁이 되었는지. 한 조약이 다음 전쟁을 예약하지는 않았습니다.",
  path: "/bridge",
});

export default function BridgePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "1차가 2차로", path: "/bridge" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/summary", label: "요약" }, { label: "1차가 2차로" }]} />
      <p className="mt-4 text-xs tracking-[0.16em] text-terra">1918–1939</p>
      <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">1차 세계대전이 2차를 어떻게 밀어 올렸나</h1>
      <div className="mt-6 space-y-3 text-sm leading-7">
        {bridgeParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-6 text-sm leading-7 text-muted">
        국가와 민족을 어떻게 볼 것인가는{" "}
        <a className="text-laurel underline" href={PHILOSOPHY_URL} target="_blank" rel="noopener noreferrer">
          철학이야기
        </a>
        의 질문입니다. 이 페이지는 전쟁의 정치사만 적습니다. 날짜의 나열은{" "}
        <Link href="/timeline" className="text-laurel underline">
          전간기 연표
        </Link>
        와{" "}
        <a className="text-laurel underline" href={TIMELINE_URL} target="_blank" rel="noopener noreferrer">
          나두연표
        </a>
        에 있습니다.
      </p>
    </article>
  );
}

import { EXTRA_LINKS, KOREA_URL, SISTER_SITES, SISTER_SITES_LABEL, TIMELINE_URL } from "@/lib/site";

const external = "noopener noreferrer";

export function SisterSites({ variant = "header" }: { variant?: "header" | "footer" | "home" }) {
  if (variant === "footer") {
    return (
      <div>
        <nav aria-label={SISTER_SITES_LABEL} className="mt-6 border-t border-line pt-4">
          <p aria-hidden className="text-[10px] tracking-[0.16em] text-terra">
            {SISTER_SITES_LABEL}
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs">
            {SISTER_SITES.map((site) => (
              <li key={site.href}>
                <a href={site.href} className="underline decoration-line underline-offset-4 hover:text-terra" target="_blank" rel={external}>
                  {site.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="함께 보는 나두" className="mt-4">
          <p aria-hidden className="text-[10px] tracking-[0.16em] text-terra">
            함께 보는 나두
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs">
            {EXTRA_LINKS.map((site) => (
              <li key={site.href}>
                <a href={site.href} className="underline decoration-line underline-offset-4 hover:text-terra" target="_blank" rel={external}>
                  {site.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }

  if (variant === "home") {
    return (
      <section aria-labelledby="sister-sites-heading" className="rounded-lg border border-line bg-card p-5">
        <h2 id="sister-sites-heading" className="font-serif text-2xl text-ink">
          {SISTER_SITES_LABEL}
        </h2>
        <p className="mt-2 text-sm leading-7 text-muted">
          고대와 신화, 한국사, 오늘날의 나라 카드는 나두의 다른 사이트에 있습니다. 세계대전이야기는 1914년에서 1945년, 그리고 그 사이 스무 해를 적습니다. 라인 동쪽의 고대는{" "}
          <a className="text-laurel underline" href="https://germanic-stories.vercel.app" target="_blank" rel={external}>
            게르만이야기
          </a>
          , 무솔리니가 끌어다 쓴 로마는{" "}
          <a className="text-laurel underline" href="https://rome-stories.vercel.app" target="_blank" rel={external}>
            로마이야기
          </a>
          에 따로 있습니다.
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          {SISTER_SITES.map((site) => (
            <li key={site.href}>
              <a href={site.href} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra" target="_blank" rel={external}>
                {site.label}
              </a>
              <span className="ml-2 text-[11px] tracking-[0.12em] text-terra">{site.en}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <a href={TIMELINE_URL} className="text-terra" target="_blank" rel={external}>
            나두연표에서 같은 해 보기 →
          </a>
          <a href={`${KOREA_URL}/defenders`} className="text-terra" target="_blank" rel={external}>
            대한민국이야기의 독립운동 →
          </a>
        </p>
      </section>
    );
  }

  return (
    <nav aria-label={SISTER_SITES_LABEL} className="mx-auto flex w-full min-w-0 max-w-6xl items-center gap-x-3 overflow-x-auto px-4 pb-2.5 text-xs">
      <span aria-hidden className="sticky left-0 z-10 flex shrink-0 items-center self-stretch bg-bg pr-2 text-[10px] tracking-[0.16em] text-terra">
        {SISTER_SITES_LABEL}
      </span>
      <ul className="flex shrink-0 items-center gap-x-3">
        {SISTER_SITES.map((site) => (
          <li key={site.href} className="shrink-0">
            <a href={site.href} className="text-muted underline decoration-line underline-offset-4 hover:text-terra" target="_blank" rel={external}>
              {site.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

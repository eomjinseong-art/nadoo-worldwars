import Link from "next/link";
import { CoupangCard } from "@/components/CoupangCard";
import { JsonLd } from "@/components/JsonLd";
import { SisterSites } from "@/components/SisterSites";
import { battles } from "@/data/battles";
import { films } from "@/data/films";
import { people } from "@/data/people";
import { jsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { BRAND_LINE, CHECKLIST_URL, HOME_SECTIONS, KOREA_URL, SITE_SUB, SITE_TAGLINE, TIMELINE_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "홈",
  description: `${SITE_TAGLINE}. ${SITE_SUB}`,
  path: "/",
});

const PATH = [
  { href: "/summary", label: "원인·경과·결과 세 줄" },
  { href: "/map", label: "협상국과 동맹국, 연합국과 추축국" },
  { href: "/bridge", label: "1차가 2차를 어떻게 밀어 올렸는지" },
  { href: "/timeline", label: "연표와 그때 한반도" },
  { href: "/issues/holocaust", label: "홀로코스트를 전투와 나누어 읽기" },
  { href: "/issues/korea-1945", label: "광복과 38선" },
  { href: "/films", label: "영화가 그리는 전투와 빠뜨리는 것" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-8">
      <JsonLd data={jsonLd([websiteLd(`${SITE_TAGLINE}. ${SITE_SUB}`)])} />
      <section className="py-12 text-center sm:py-16">
        <p className="text-xs tracking-[0.3em] text-terra">WORLD WAR STORIES</p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">세계대전이야기</h1>
        <p className="mt-4 text-lg text-muted">{SITE_TAGLINE}</p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">{SITE_SUB}</p>
        <p className="mt-3 text-xs text-terra">{BRAND_LINE}</p>
        <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-muted">
          전투 {battles.length}개, 인물 {people.length}명, 영화 {films.length}편. 얼굴 그림은 넣지 않습니다. 국경은 오늘날의 모양이라고 적습니다.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <Link href="/summary" className="rounded-full bg-terra px-4 py-2 text-white hover:bg-terra-deep">
            세 줄 요약부터
          </Link>
          <Link href="/map" className="rounded-full border border-line bg-card px-4 py-2 hover:border-terra">
            진영 지도
          </Link>
          <a href={TIMELINE_URL} className="rounded-full border border-line bg-card px-4 py-2 hover:border-terra" target="_blank" rel="noopener noreferrer">
            나두연표
          </a>
        </div>
      </section>

      <CoupangCard />
      <div className="dentil opacity-50" aria-hidden />

      <section className="mt-10" aria-labelledby="door-heading">
        <h2 id="door-heading" className="font-serif text-2xl text-ink">
          세 개의 문
        </h2>
        <p className="mt-1 text-sm text-muted">두 전쟁을 한 줄 연표로 외우기 전에, 먼저 이 세 칸만 나누세요.</p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <Link href="/summary" className="rounded-lg border border-line bg-card p-5 hover:border-terra">
            <p className="text-[11px] tracking-[0.16em] text-terra">1914–1918</p>
            <h3 className="mt-1 font-serif text-2xl text-ink">1차 세계대전</h3>
            <p className="mt-3 text-sm leading-6 text-muted">동맹과 7월 위기, 참호, 미국의 참전과 러시아의 이탈, 1918년의 휴전.</p>
          </Link>
          <Link href="/bridge" className="rounded-lg border border-line bg-card p-5 hover:border-terra">
            <p className="text-[11px] tracking-[0.16em] text-terra">1919–1939</p>
            <h3 className="mt-1 font-serif text-2xl text-ink">1차가 2차로</h3>
            <p className="mt-3 text-sm leading-6 text-muted">베르사유만으로 설명하지 않습니다. 공황, 연맹, 유화, 독소 조약이 겹칩니다.</p>
          </Link>
          <Link href="/summary" className="rounded-lg border border-line bg-card p-5 hover:border-terra">
            <p className="text-[11px] tracking-[0.16em] text-terra">1939–1945</p>
            <h3 className="mt-1 font-serif text-2xl text-ink">2차 세계대전</h3>
            <p className="mt-3 text-sm leading-6 text-muted">폴란드에서 진주만, 스탈린그라드와 노르망디, 항복, 그리고 광복과 38선.</p>
          </Link>
        </div>
      </section>

      <section className="mt-12" aria-labelledby="menu-heading">
        <h2 id="menu-heading" className="font-serif text-2xl text-ink">
          모든 길
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {HOME_SECTIONS.map((section, index) => (
            <Link key={section.href + section.title} href={section.href} className="group rounded-lg border border-line bg-card p-5 transition hover:border-terra hover:shadow-sm">
              <p className="font-serif text-xs text-terra">
                {String(index + 1).padStart(2, "0")} · {section.en}
              </p>
              <h3 className="mt-1 font-serif text-xl text-ink group-hover:text-terra">{section.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{section.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-ink">처음 읽는 순서</h2>
          <ol className="mt-4 space-y-2 text-sm">
            {PATH.map((item, index) => (
              <li key={item.href + item.label}>
                <Link href={item.href} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">
                  {index + 1}. {item.label}
                </Link>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm leading-7 text-muted">
            영화로 들어가려면{" "}
            <a className="text-laurel underline" href={CHECKLIST_URL} target="_blank" rel="noopener noreferrer">
              영화 체크리스트
            </a>
            의 세계대전 목록과 이 사이트의 영화 장을 나란히 보세요. 한반도의 독립운동은{" "}
            <a className="text-laurel underline" href={`${KOREA_URL}/defenders`} target="_blank" rel="noopener noreferrer">
              대한민국이야기
            </a>
            에 있습니다.
          </p>
        </div>
        <SisterSites variant="home" />
      </section>
    </div>
  );
}

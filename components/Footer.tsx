import Link from "next/link";
import { CoupangBanner } from "@/components/CoupangBanner";
import { SisterSites } from "@/components/SisterSites";
import { BRAND_LINE, NAV, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-stone/80">
      <CoupangBanner />
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-6 text-muted">
        <p className="font-serif text-base text-ink">{SITE_NAME}</p>
        <p className="mt-1 text-xs tracking-wide text-terra">{BRAND_LINE}</p>
        <div className="mt-4 max-w-3xl space-y-2">
          <p>
            세계대전이야기의 글은 강화 조약의 뼈대, 각국이 공개한 참전 날짜, 그리고 널리 쓰이는 전쟁사 정리를 참고해 우리말로 다시 쓴 것입니다. 옛 문장이나 현대 책의 문장을 그대로 옮기지 않았고, 없는 말을 만들어 넣지 않았습니다.
          </p>
          <p>
            지도의 나라 모양은 오늘날의 국경입니다. 1914년의 제국과 같지 않습니다. 확인이 약한 일화는 ‘전해지는 이야기’라고 적습니다. 영화 제목과 상표는 각 권리자의 것입니다. 영화를 볼 수 있는 불법 사이트는 안내하지 않습니다. 무기의 제작법은 적지 않습니다.
          </p>
        </div>
        <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
          <Link href="/" className="underline decoration-line underline-offset-4 hover:text-terra">
            홈
          </Link>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="underline decoration-line underline-offset-4 hover:text-terra">
              {item.label}
            </Link>
          ))}
          <Link href="/bridge" className="underline decoration-line underline-offset-4 hover:text-terra">
            1차가 2차로
          </Link>
        </nav>
        <SisterSites variant="footer" />
      </div>
    </footer>
  );
}

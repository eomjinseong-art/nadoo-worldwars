import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CoupangCard } from "@/components/CoupangCard";
import { JsonLd } from "@/components/JsonLd";
import { Quiz } from "@/components/Quiz";
import { quiz } from "@/data/quiz";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "퀴즈",
  description: `1차·2차 세계대전 공부용 퀴즈 ${quiz.length}문제. 진영 전향, 참전 날짜, 베르사유와 광복을 확인합니다.`,
  path: "/quiz",
});

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "퀴즈", path: "/quiz" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "퀴즈" }]} />
      <h1 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">퀴즈</h1>
      <p className="mt-3 text-sm leading-7 text-muted">
        {quiz.length}문제입니다. 고르면 그 문제의 해설이 열리고, 전체 해설로 점수를 볼 수 있습니다. 정답보다 해설의 예외가 공부입니다.
      </p>
      <div className="mt-8">
        <Quiz items={quiz} />
      </div>
      <CoupangCard />
    </div>
  );
}

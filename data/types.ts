export type WarId = "ww1" | "ww2";
export type TabId = WarId | "bridge" | "inter";

export type OutLink = { href: string; label: string };

export type Summary = {
  war: WarId;
  title: string;
  years: string;
  cause: string;
  course: string;
  result: string;
  more: string[];
};

export type Phase = {
  war: WarId;
  id: string;
  title: string;
  years: string;
  front: string;
  summary: string;
  events: string[];
};

export type TimelineRow = {
  war: "ww1" | "inter" | "ww2";
  sort: number;
  when: string;
  text: string;
  korea: string;
  href?: string;
};

export type Issue = {
  slug: string;
  war: WarId | "bridge";
  title: string;
  en: string;
  when: string;
  why: string;
  body: string[];
  korea?: string;
  anecdote?: string;
  links: OutLink[];
};

export type Battle = {
  slug: string;
  war: WarId;
  title: string;
  en: string;
  when: string;
  front: string;
  sides: string;
  result: string;
  why: string;
  body: string[];
  korea: string;
  filmSlugs: string[];
  links: OutLink[];
};

export type Person = {
  slug: string;
  war: WarId | "both";
  name: string;
  en: string;
  role: string;
  years: string;
  side: string;
  why: string;
  body: string[];
  links: OutLink[];
};

export type Film = {
  slug: string;
  war: WarId;
  ko: string;
  en: string;
  year: number;
  kind: "영화" | "시리즈" | "다큐";
  depicts: string;
  note: string;
  battleSlug?: string;
  issueSlug?: string;
};

export type QuizItem = {
  q: string;
  options: string[];
  answer: number;
  why: string;
};

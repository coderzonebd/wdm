// SPDX-License-Identifier: GPL-3.0-or-later
import { bn } from "./bn";
import { en, type Strings } from "./en";

export type Lang = "en" | "bn";
export const strings: Record<Lang, Strings> = { en, bn };

export type Page = "home" | "download" | "extension" | "benchmarks" | "faq" | "privacy";
const slugs: Record<Page, string> = {
  home: "",
  download: "download/",
  extension: "extension/",
  benchmarks: "benchmarks/",
  faq: "faq/",
  privacy: "privacy/",
};

/** Path of `page` in `lang`, under the site's base. */
export function href(lang: Lang, page: Page, hash = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  return `${base}${lang === "bn" ? "bn/" : ""}${slugs[page]}${hash}`;
}

export const REPO = "https://github.com/coderzonebd/whoosh-download-manager";

/** Measured medians in seconds (gate run 4), for the comparison bars. */
export const CHART = [
  { whoosh: 0.142, other: 0.216, otherName: "aria2-next" },
  { whoosh: 0.169, other: 0.199, otherName: "Surge" },
  { whoosh: 0.295, other: 0.316, otherName: "Gopeed" },
] as const;

/** Digits in the page's script. */
export function num(lang: Lang, text: string): string {
  return lang === "bn" ? text.replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)] ?? d) : text;
}

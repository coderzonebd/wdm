// SPDX-License-Identifier: GPL-3.0-or-later
// The newest published release of the app, read from GitHub when the site is built (the deploy
// workflow rebuilds it every few hours and on demand). The files are downloaded straight from
// GitHub's release servers, a worldwide CDN; nothing passes through this site.

const API = "https://api.github.com/repos/coderzonebd/whoosh-download-manager/releases?per_page=10";

export interface Asset {
  name: string;
  url: string;
  size: number;
  sha256?: string;
}

export interface Release {
  tag: string;
  version: string;
  prerelease: boolean;
  url: string;
  date: string;
  assets: Asset[];
  /** `SHA256SUMS` of the release, when it has one. */
  sums?: string;
}

interface GhAsset {
  name: string;
  browser_download_url: string;
  size: number;
  digest?: string | null;
}
interface GhRelease {
  tag_name: string;
  draft: boolean;
  prerelease: boolean;
  html_url: string;
  published_at: string | null;
  assets: GhAsset[];
}

let cached: Promise<Release | undefined> | undefined;

/** The newest published release with files (betas included), or undefined when GitHub cannot be reached. */
export function latestRelease(): Promise<Release | undefined> {
  cached ??= load();
  return cached;
}

/** For working on the page before a release exists: `WHOOSH_SAMPLE_RELEASE=1 pnpm dev`. */
function sample(): Release {
  const v = "1.0.0-beta.1";
  const base = `https://github.com/coderzonebd/whoosh-download-manager/releases/download/v${v}`;
  const names: [string, number][] = [
    [`Whoosh-Download-Manager_${v}_x64-setup.exe`, 11_800_000],
    [`Whoosh-Download-Manager_${v}_arm64-setup.exe`, 10_900_000],
    [`Whoosh-Download-Manager_${v}_x64_portable.zip`, 12_400_000],
    [`Whoosh-Download-Manager_${v}_universal.dmg`, 26_300_000],
    [`Whoosh-Download-Manager_${v}_amd64.deb`, 12_100_000],
    [`Whoosh-Download-Manager_${v}_arm64.deb`, 11_600_000],
    [`Whoosh-Download-Manager_${v}_amd64.AppImage`, 86_000_000],
    [`Whoosh-Download-Manager_${v}_aarch64.AppImage`, 84_000_000],
    [`Whoosh-Download-Manager_${v}_android.apk`, 63_800_000],
    [`wdm-chromium-${v}.zip`, 140_000],
    ["SHA256SUMS", 2_000],
  ];
  const assets = names.map(([name, size]) => ({ name, size, url: `${base}/${name}`, sha256: "0".repeat(64) }));
  return { tag: `v${v}`, version: v, prerelease: true, url: `${base.replace("/download/", "/tag/")}`, date: "2026-11-18", assets, sums: `${base}/SHA256SUMS` };
}

async function load(): Promise<Release | undefined> {
  const env = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env ?? {};
  if (env.WHOOSH_SAMPLE_RELEASE === "1") return sample();
  try {
    // Build time only (Node): a token lifts GitHub's 60-requests-an-hour limit in CI.
    const token = env.GITHUB_TOKEN;
    const res = await fetch(API, {
      headers: {
        accept: "application/vnd.github+json",
        "user-agent": "wdm-website-build",
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!res.ok) {
      console.warn(`releases: GitHub answered ${res.status}; the download page links to the releases page`);
      return undefined;
    }
    const list = (await res.json()) as GhRelease[];
    const r = list.find((x) => !x.draft && x.assets.length > 0);
    if (!r) return undefined;
    const assets = r.assets
      .filter((a) => !a.name.endsWith(".sig"))
      .map((a) => ({
        name: a.name,
        url: a.browser_download_url,
        size: a.size,
        sha256: a.digest?.startsWith("sha256:") ? a.digest.slice(7) : undefined,
      }));
    return {
      tag: r.tag_name,
      version: r.tag_name.replace(/^v/, ""),
      prerelease: r.prerelease,
      url: r.html_url,
      date: (r.published_at ?? "").slice(0, 10),
      assets,
      sums: assets.find((a) => a.name === "SHA256SUMS")?.url,
    };
  } catch (e) {
    console.warn(`releases: ${e}; the download page links to the releases page`);
    return undefined;
  }
}

/** Every file a person would pick, by what it is for. */
export type Kind =
  | "win-x64"
  | "win-arm64"
  | "win-msi"
  | "win-portable-x64"
  | "win-portable-arm64"
  | "mac"
  | "deb-x64"
  | "deb-arm64"
  | "appimage-x64"
  | "appimage-arm64"
  | "rpm-x64"
  | "rpm-arm64"
  | "android"
  | "ext-chromium";

const PATTERNS: [Kind, RegExp][] = [
  ["win-x64", /_x64-setup\.exe$/],
  ["win-arm64", /_arm64-setup\.exe$/],
  ["win-msi", /_x64_[a-zA-Z-]+\.msi$/],
  ["win-portable-x64", /_x64_portable\.zip$/],
  ["win-portable-arm64", /_arm64_portable\.zip$/],
  ["mac", /\.dmg$/],
  ["deb-x64", /_amd64\.deb$/],
  ["deb-arm64", /_arm64\.deb$/],
  ["appimage-x64", /_amd64\.AppImage$/],
  ["appimage-arm64", /_aarch64\.AppImage$/],
  ["rpm-x64", /\.x86_64\.rpm$/],
  ["rpm-arm64", /\.aarch64\.rpm$/],
  ["android", /_android\.apk$/],
  ["ext-chromium", /^wdm-chromium-(?!.*-store).*\.zip$/],
];

export function files(release: Release | undefined): Partial<Record<Kind, Asset>> {
  const out: Partial<Record<Kind, Asset>> = {};
  for (const a of release?.assets ?? []) {
    const hit = PATTERNS.find(([, re]) => re.test(a.name));
    if (hit && !out[hit[0]]) out[hit[0]] = a;
  }
  return out;
}

/** "23.4 MB" */
export function size(bytes: number): string {
  if (bytes >= 1e9) return `${(bytes / 1e9).toFixed(1)} GB`;
  if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1e3))} KB`;
}

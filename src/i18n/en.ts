// SPDX-License-Identifier: GPL-3.0-or-later
// English source text for the website. `bn.ts` must provide the same shape.

export const en = {
  lang: "en",
  dir: "ltr",
  meta: {
    title: "Whoosh Download Manager",
    description:
      "Whoosh (WDM) is an open-source, crash-proof download manager for Windows, macOS and Linux, measured against every competitor in public.",
  },
  nav: {
    home: "Home",
    download: "Download",
    extension: "Browser extension",
    benchmarks: "Benchmarks",
    faq: "FAQ",
    support: "Support",
    github: "GitHub",
    language: "বাংলা",
    menu: "Menu",
    skip: "Skip to content",
  },
  status: {
    badge: "In development",
    text: "Whoosh is not released yet. The first public beta comes when the desktop app is finished.",
    follow: "Watch the repository on GitHub to hear about it.",
  },
  home: {
    eyebrow: "Open source · Windows · macOS · Linux",
    title: "The download manager that proves it is fast.",
    lead: "Whoosh splits downloads across connections only when that really helps, survives crashes and power cuts without a broken file, and publishes every benchmark it runs against other download managers.",
    ctaDownload: "Get Whoosh",
    ctaGithub: "Source on GitHub",
    statsTitle: "Measured, not claimed",
    statsNote:
      "From the public Phase 1 benchmark: 7 runs per case, a Mann-Whitney U test, and time counted until the file is safely on disk.",
    stats: [
      { value: "175 / 175", label: "runs byte-exact, 0 wrong file names" },
      { value: "0", label: "corrupt or duplicate files after 1,000 × kill -9" },
      { value: "1.26 CPU-s", label: "per GiB, the lowest of all clients tested" },
      { value: "3 / 3", label: "real CDNs where no competitor was significantly faster" },
    ],
    statsLink: "See the benchmarks",
    featuresTitle: "What it does",
    features: [
      {
        title: "Fast where it matters",
        text: "HTTP/1.1, HTTP/2 and HTTP/3 with Happy Eyeballs. It starts on one connection, adds more only when they win, and remembers each server's limits.",
      },
      {
        title: "Crash-proof",
        text: "A write-ahead journal and power-safe finish: a power cut, load-shedding or a killed process never leaves a corrupt or duplicate file.",
      },
      {
        title: "Handles difficult servers",
        text: "Slow, stalling and flaky servers, expiring links, cookies and referers, servers without ranges, and Bangla and other Unicode file names.",
      },
      {
        title: "Queues and a scheduler",
        text: "Named queues, start and stop times, speed limits by time of day, and an optional sleep or shutdown when a queue finishes.",
      },
      {
        title: "Browser integration",
        text: "An extension for Firefox and Chromium-based browsers hands downloads to the app with their cookies, and finds a fresh link when an old one expires.",
      },
      {
        title: "One engine, many clients",
        text: "A local daemon with a token-protected API, used by the desktop app, the command line and the extension. Downloads keep going when the window is closed.",
      },
    ],
    privacyTitle: "No ads. No tracking.",
    privacyText:
      "Whoosh sends nothing about you anywhere. Crash reports exist only if you turn them on.",
    privacyLink: "Privacy",
    langTitle: "বাংলা and English, and more",
    langText:
      "The app speaks Bangla and English, with more languages translated by the community.",
  },
  download: {
    title: "Download",
    lead: "Whoosh is not released yet. This page will list the installers for every platform once the first public beta is out.",
    platformsTitle: "Planned packages",
    platforms: [
      {
        name: "Windows 10 and 11",
        items: ["Installer (.exe)", "MSI", "Portable zip", "winget", "Scoop"],
      },
      { name: "macOS 12 or later", items: ["Universal .dmg (Apple silicon and Intel)", "Homebrew (our tap)"] },
      { name: "Linux", items: ["AppImage", ".deb", ".rpm", "Flathub", "AUR"] },
    ],
    signingTitle: "Code signing",
    signingWindows:
      "Windows builds will be signed with free code signing provided by SignPath.io, certificate by SignPath Foundation. Until that is in place, Windows may warn about an unknown publisher: choose More info → Run anyway.",
    signingMac:
      "macOS builds are not notarized by Apple. The first time you open Whoosh, right-click it and choose Open, or go to System Settings → Privacy & Security and choose Open Anyway.",
    verifyTitle: "Check what you downloaded",
    verifyText:
      "Every release lists SHA-256 checksums and carries a signed build-provenance attestation showing it was built by this project's GitHub workflow from the tagged source.",
    verifyCode: "gh attestation verify <file> --repo coderzonebd/whoosh-download-manager",
    sourceTitle: "Build from source",
    sourceText: "The engine, daemon and command line build today on Linux, macOS and Windows.",
  },
  extension: {
    title: "Browser extension",
    lead: "The extension sends your browser's downloads to Whoosh, with the cookies and referer the site needs. It needs the Whoosh app installed and collects no data.",
    browsersTitle: "Where to get it",
    browsers: [
      { name: "Firefox", text: "From Firefox Add-ons (AMO), once it is published there." },
      { name: "Microsoft Edge", text: "From Edge Add-ons, once it is published there. The Windows installer can also offer it to Edge." },
      {
        name: "Chrome, Brave, Vivaldi, Opera",
        text: "Not in the Chrome Web Store yet. Until then: download the extension zip from the release, unzip it, open the browser's extensions page, turn on Developer mode, and choose Load unpacked. Such installs do not update by themselves.",
      },
    ],
    featuresTitle: "What it does",
    features: [
      "Catches downloads and hands them to Whoosh (Alt-click keeps one in the browser).",
      "Right-click any link to download it with Whoosh.",
      "Finds video and audio streams on the page.",
      "When a download link expires, it finds the fresh one from your browsing.",
      "Per-site exclusions, minimum size and file types in its options.",
    ],
  },
  benchmarks: {
    title: "Benchmarks",
    lead: "Every number comes from whoosh-bench, which runs Whoosh and other downloaders against a test server that throttles, drops, stalls, lies about ranges and redirects. The raw data of every run is public.",
    tableHead: ["", "Whoosh", "Best competitor"],
    rows: [
      ["Correct files", "175 / 175 runs byte-exact, 0 wrong names", "Gopeed: 14 corrupt files · Surge: 1"],
      ["Crash test: 1,000 × kill -9", "0 corrupt, 0 duplicates (1,584 downloads)", "not measured by anyone else"],
      ["CPU per GiB (1 GiB file)", "1.26 CPU-s", "1.51 CPU-s (aria2c, 16 connections)"],
      ["Flaky server, 100 MiB", "0.142 s, fastest", "aria2-next 0.216 s"],
      ["Stalling server, 100 MiB", "0.169 s, fastest", "Surge 0.199 s"],
      ["Slow-drip server, 10 MiB", "0.295 s, fastest", "Gopeed 0.316 s"],
      ["Real CDNs (kernel.org/Fastly, Google, Mozilla)", "no competitor significantly faster · lowest CPU on all three", "aria2-next, Mister DM, aria2c -x16"],
    ],
    methodTitle: "How it is measured",
    method: [
      "Each case runs 7 times and is compared with a Mann-Whitney U test (p < 0.01).",
      "Time stops when the file is safely on disk, for every client: Whoosh syncs its files before calling them done, and the benchmark syncs the other clients' files too.",
      "That safety costs a few milliseconds on small files: wget can finish a 1 MiB file 5–9 ms sooner. The rules allow up to 10 ms on files of 4 MiB or less, and every report lists where that applies.",
      "Competitors: curl, wget, aria2c, aria2-next, Mister DM, Surge, Gopeed.",
    ],
    dataLink: "Raw data and reports on GitHub",
  },
  faq: {
    title: "Questions",
    items: [
      { q: "Is Whoosh free?", a: "Yes. It is open source: the engine and libraries are Apache-2.0, and the apps are GPL-3.0-or-later. There are no ads and no paid tier." },
      { q: "When can I use it?", a: "The engine, daemon and command line work today if you build them from source. The desktop app and browser extension are being finished; the first public beta follows." },
      { q: "Which systems does it run on?", a: "Windows 10 and 11, macOS 12 or later, and Linux. Android and iOS are planned later." },
      { q: "Why is it called crash-proof?", a: "Whoosh records progress in a journal only after the data is on disk, and only calls a file finished once it and its name are safely stored. A power cut, load-shedding or a crash never leaves a broken or duplicate file; the download resumes where it was." },
      { q: "Does it collect data?", a: "No. Nothing is sent anywhere unless you turn on crash reports. See Privacy." },
      { q: "Can I help?", a: "Yes: report bugs, translate, or send code. Pull requests go to the dev branch on GitHub." },
    ],
  },
  privacy: {
    title: "Privacy",
    updated: "Last updated: 14 November 2026",
    sections: [
      { h: "The app", p: "Whoosh downloads what you ask it to and stores its settings and download list on your computer. It does not send usage data, analytics or identifiers anywhere." },
      { h: "Crash reports", p: "Optional and off by default (they arrive with the beta). If you turn them on, a crash sends a technical report — the error, where it happened, the app version and the operating system — to our crash-report service, hosted by GlitchTip. Reports are built to leave out your file names and links. You can turn them off at any time." },
      { h: "The local API", p: "The app's background service listens only on your own computer (127.0.0.1) and accepts only clients that know a secret token stored in a file that only your user account can read." },
      { h: "Browser extension", p: "The extension collects no data. It passes the downloads you start, with the cookies and referer they need, only to the Whoosh app on your computer, through the browser's native messaging." },
      { h: "Video sites", p: "Desktop builds can use yt-dlp and ffmpeg, downloaded from their official releases when you first need them. They run on your computer." },
      { h: "This website", p: "This site sets no cookies and loads no analytics or third-party scripts. It is hosted on GitHub Pages, which keeps server logs under GitHub's own privacy statement." },
      { h: "Contact", p: "Questions: open an issue on GitHub, or report security problems privately as described in SECURITY.md." },
    ],
  },
  support: {
    title: "Support Whoosh",
    text: "Whoosh is free and has no ads or tracking. If it saves you time, you can help keep it going.",
    sponsors: "GitHub Sponsors",
    coffee: "Buy Me a Coffee",
    other: "Starring the repository, reporting bugs and translating help too.",
  },
  footer: {
    made: "Made by CoderZone BD and contributors.",
    license: "Open source under Apache-2.0 and GPL-3.0-or-later.",
    privacy: "Privacy",
  },
};

export type Strings = typeof en;

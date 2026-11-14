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
    download: "Download",
    extension: "Extension",
    benchmarks: "Speed tests",
    faq: "Questions",
    github: "GitHub",
    language: "বাংলা",
    menu: "Menu",
    skip: "Skip to content",
    cta: "Get Whoosh",
  },
  home: {
    soon: "Coming soon: the first public beta",
    title1: "Whoosh.",
    title2: "It's downloaded.",
    lead: "The free download manager that goes as fast as your connection allows, and never hands you a broken file.",
    cta: "Get Whoosh, free",
    cta2: "See the speed tests",
    platforms: ["Windows", "macOS", "Linux", "Firefox, Edge and Chrome"],
    shot: {
      alt: "The Whoosh app: a list of downloads with their size, progress, speed and time left.",
      caption: "The Whoosh app, shown with demo files.",
    },
    fast: {
      title: "As fast as your internet can go.",
      text: "Whoosh opens extra connections only when they make a file arrive sooner, and eases off when a server pushes back. We race it against other download managers and publish every result, wins and losses.",
      link: "All the speed tests",
    },
    chart: {
      title: "Time to a finished file",
      unit: "In seconds, the middle result of 7 runs. Shorter is faster.",
      cases: ["A server that keeps dropping the line, 100 MiB", "A server that stalls, 100 MiB", "A server that drips data slowly, 10 MiB"],
      sec: "s",
    },
    power: {
      title1: "The power can go.",
      title2: "Your download won't.",
      text: "Load-shedding, a crash, a closed laptop lid: Whoosh carries on from where it stopped, never from zero. We proved it the hard way, by killing Whoosh 1,000 times in the middle of downloads.",
      barLabel: "A download bar: the power cuts out part of the way through, and the download carries on from the same point.",
      cut: "power cut",
      resume: "carries on from here",
      results: [
        { value: "1,000", label: "forced crashes, mid-download" },
        { value: "0", label: "broken files" },
        { value: "0", label: "files downloaded twice" },
      ],
    },
    all: {
      title1: "Download anything.",
      title2: "Lose nothing.",
      items: [
        { title: "Big files", text: "Split across connections and put back together byte for byte. Pause tonight, carry on tomorrow." },
        { title: "Video and audio", text: "The browser extension spots video and audio on a page and offers them to Whoosh." },
        { title: "Slow, moody servers", text: "Servers that stall, drop the line or limit your speed. Whoosh waits, retries and works around the slow part." },
        { title: "Links that expire", text: "When a download link runs out, the extension finds the fresh one and the download continues." },
        { title: "Queues and a timetable", text: "Line downloads up, start them at night, cap the speed during the day, and let the computer sleep when the queue is done." },
        { title: "বাংলা file names", text: "Bangla, or any other script, in file names, exactly as the site wrote them." },
      ],
    },
    browser: {
      title: "It lives in your browser too.",
      text: "Click a download in Firefox, Edge, Chrome or Brave and Whoosh takes it from there, with the cookies the site needs.",
      link: "About the extension",
    },
    honest: {
      title: "No ads. No account. No tracking.",
      text: "Whoosh is open source. The only thing it sends is an anonymous crash report when something breaks, with no file names or links, and you can turn that off.",
      link: "Privacy",
    },
    lang: {
      title: "বাংলা and English",
      text: "The whole app speaks both, and more languages are on the way.",
    },
  },
  download: {
    title: "Get Whoosh",
    lead: "Not out yet. The first public beta is on its way, and this page will carry the installers for every system the day it lands.",
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
    title: "In your browser",
    lead: "The extension hands your browser's downloads to Whoosh, with the cookies the site needs. It works together with the Whoosh app and collects no data.",
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
    title: "Speed tests",
    lead: "We race Whoosh against other download managers on a test server built to misbehave: it slows down, drops the line, stalls and lies. Every result is public, including the ones we lose.",
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
      { q: "Does it collect data?", a: "No usage data, no analytics, no account. When Whoosh crashes it sends an anonymous crash report so we can fix the bug: the error and where it happened, never your file names or links. It is on by default and you can turn it off in Settings. See Privacy." },
      { q: "Can I help?", a: "Yes: report bugs, translate, or send code. Pull requests go to the dev branch on GitHub." },
    ],
  },
  privacy: {
    title: "Privacy",
    updated: "Last updated: 14 November 2026 (crash reports are now on by default)",
    sections: [
      { h: "The app", p: "Whoosh downloads what you ask it to and stores its settings and download list on your computer. It does not send usage data, analytics or identifiers anywhere." },
      { h: "Crash reports", p: "On by default, and you can turn them off at any time in Settings; the first time Whoosh runs it tells you so. When Whoosh crashes, it sends a technical report (the error, where it happened, the app version and the operating system) to our crash-report service, hosted by GlitchTip. Before anything leaves your computer, Whoosh removes file names, paths, links, cookies, headers and user names from the report. There is no performance tracking and no recording of what you do. Builds made from source without our crash-report address send nothing." },
      { h: "The local API", p: "The app's background service listens only on your own computer (127.0.0.1) and accepts only clients that know a secret token stored in a file that only your user account can read." },
      { h: "Browser extension", p: "The extension collects no data. It passes the downloads you start, with the cookies and referer they need, only to the Whoosh app on your computer, through the browser's native messaging." },
      { h: "Video sites", p: "Desktop builds can use yt-dlp and ffmpeg, downloaded from their official releases when you first need them. They run on your computer." },
      { h: "This website", p: "This site sets no cookies and loads no analytics or third-party scripts. It is hosted on GitHub Pages, which keeps server logs under GitHub's own privacy statement." },
      { h: "Contact", p: "Questions: open an issue on GitHub, or report security problems privately as described in SECURITY.md." },
    ],
  },
  support: {
    title: "Keep Whoosh going",
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

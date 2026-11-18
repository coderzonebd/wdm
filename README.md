# wdm (website)

The website of [Whoosh Download Manager](https://github.com/coderzonebd/whoosh-download-manager), in English and Bangla. Static pages built with [Astro](https://astro.build); no cookies, analytics or third-party scripts. The design system is in [MASTER.md](MASTER.md).

```bash
pnpm install
pnpm dev        # http://localhost:4321/wdm/
pnpm check      # type check
pnpm build      # → dist/
```

- Text lives in `src/i18n/en.ts` (source) and `src/i18n/bn.ts`; the TypeScript type keeps them in step.
- Pages are `src/components/*.astro`; `src/pages/` and `src/pages/bn/` only pick the language.
- Pushing to `main` publishes to GitHub Pages (`.github/workflows/deploy.yml`), and so does a scheduled build every three hours.
- The download page lists the files of the app's newest release, read from GitHub when the site is built (`src/lib/release.ts`); the visitor's browser picks the file for their system. `WHOOSH_SAMPLE_RELEASE=1 pnpm dev` shows a sample release.

## Custom domain

1. Buy the domain (for example `whooshdownloadmanager.app`).
2. DNS: `A` records for the apex to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and `AAAA` to `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`; `CNAME` `www` → `coderzonebd.github.io`.
3. Verify the domain for the `coderzonebd` organisation (Settings → Pages → Add a domain), so no one else can claim it.
4. Set the repository variable `CUSTOM_DOMAIN` to the domain and re-run the Deploy workflow; then tick *Enforce HTTPS* in Settings → Pages.

## License

GPL-3.0-or-later. The Whoosh logo comes from the main repository.

// SPDX-License-Identifier: GPL-3.0-or-later
import { defineConfig } from "astro/config";

// With a custom domain (repository variable CUSTOM_DOMAIN, set in the deploy
// workflow) the site lives at the domain root; without one, under the
// GitHub Pages project path.
const domain = process.env.CUSTOM_DOMAIN?.trim();
export default defineConfig({
  site: domain ? `https://${domain}` : "https://coderzonebd.github.io",
  base: domain ? "/" : "/wdm",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "bn"],
    routing: { prefixDefaultLocale: false },
  },
});

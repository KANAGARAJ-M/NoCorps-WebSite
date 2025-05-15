const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "daily", priority: 1.0 },
  { url: "/services", changefreq: "daily", priority: 1.0 },
  { url: "/products", changefreq: "daily", priority: 1.0 },
  { url: "/policies", changefreq: "daily", priority: 1.0 },
  { url: "/services/mobile-development", changefreq: "daily", priority: 1.0 },
  { url: "/services/web-development", changefreq: "daily", priority: 1.0 },
  { url: "/services/full-stack-development", changefreq: "daily", priority: 1.0 },
  { url: "/products/aic-coin", changefreq: "daily", priority: 1.0 },
  { url: "/contact-form", changefreq: "daily", priority: 1.0 },
  { url: "/web/NoCorps/privacy-policy", changefreq: "monthly", priority: 0.6 },
  { url: "/web/NoCorps/t&c", changefreq: "monthly", priority: 0.6 },
  { url: "/web/NoCorps/cookie-policy", changefreq: "monthly", priority: 0.6 },
  { url: "/android/app/AICCoin/Privacy-Policy", changefreq: "monthly", priority: 0.6 },
  { url: "/android/app/AICCoin/Terms-and-Conditions", changefreq: "monthly", priority: 0.5 },
  { url: "/android/app/Chat-Up/Privacy-Policy", changefreq: "monthly", priority: 0.5 },
  { url: "/android/app/Chat-Up/Terms-and-Condition", changefreq: "monthly", priority: 0.5 },
  { url: "/android/app/Wavora/Privacy-Policy", changefreq: "monthly", priority: 0.5 },
  { url: "/android/app/Wavora/Terms-and-Condition", changefreq: "monthly", priority: 0.5 },
  { url: "/android/app/Meme-Media/Privacy-Policy", changefreq: "monthly", priority: 0.5 },
  { url: "/android/app/Meme-Media/Terms-and-Condition", changefreq: "monthly", priority: 0.5 },
  { url: "/android/app/Wavora/Child-Safety-Standards-policy", changefreq: "daily", priority: 1.0 },
  { url: "/android/app/Dude/Privacy-Policy", changefreq: "daily", priority: 1.0 },
  { url: "/android/app/Dude/Terms-and-Condition", changefreq: "daily", priority: 1.0 },
  { url: "/Contact/form", changefreq: "daily", priority: 1.0 },
  { url: "/cpy", changefreq: "daily", priority: 1.0 },
  { url: "/remove-account", changefreq: "daily", priority: 1.0 },
  { url: "*", changefreq: "daily", priority: 1.0 },  
];

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: "https://nocorps.org" });

  for (const link of links) {
    sitemapStream.write(link);
  }

  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream);
  fs.writeFileSync("./public/sitemap.xml", sitemap.toString());
  console.log("✅ Sitemap generated successfully!");
}

generateSitemap().catch((err) => console.error("❌ Sitemap generation failed!", err));

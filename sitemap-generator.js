const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/services", changefreq: "weekly", priority: 0.8 },
  { url: "/products", changefreq: "weekly", priority: 0.8 },
  { url: "/policies", changefreq: "monthly", priority: 0.6 },
  { url: "/web/NoCorps/privacy-policy", changefreq: "monthly", priority: 0.6 },
  { url: "/web/NoCorps/t&c", changefreq: "monthly", priority: 0.6 },
  { url: "/web/NoCorps/cookie-policy", changefreq: "monthly", priority: 0.6 },
  { url: "/android/app/AICCoin/Privacy-Policy", changefreq: "monthly", priority: 0.6 },
  { url: "/android/app/AICCoin/Terms-and-Conditions", changefreq: "monthly", priority: 0.5 },
  { url: "/android/app/Chat-Up/Privacy-Policy", changefreq: "monthly", priority: 0.5 },
  { url: "/android/app/Chat-Up/Terms-and-Condition", changefreq: "monthly", priority: 0.5 },
  { url: "/android/app/Share-Media/Privacy-Policy", changefreq: "monthly", priority: 0.5 },
  { url: "/android/app/Share-Media/Terms-and-Condition", changefreq: "monthly", priority: 0.5 },
  { url: "/android/app/Meme-Media/Privacy-Policy", changefreq: "monthly", priority: 0.5 },
  { url: "/android/app/Meme-Media/Terms-and-Condition", changefreq: "monthly", priority: 0.5 },
  { url: "/Contact/form", changefreq: "monthly", priority: 0.5 },
];

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: "https://nocorps.netlify.app" });

  for (const link of links) {
    sitemapStream.write(link);
  }

  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream);
  fs.writeFileSync("./public/sitemap.xml", sitemap.toString());
  console.log("✅ Sitemap generated successfully!");
}

generateSitemap().catch((err) => console.error("❌ Sitemap generation failed!", err));

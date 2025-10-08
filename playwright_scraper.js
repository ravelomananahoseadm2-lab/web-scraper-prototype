const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const url = "https://en.wikipedia.org/wiki/Web_scraping";
  console.log("Navigation vers :", url);

  await page.goto(url, { waitUntil: "domcontentloaded" });

  const title = await page.title();
  console.log("Titre de la page :", title);

  const paragraph = await page.textContent("p");
  console.log("Premier paragraphe :", paragraph);

  await browser.close();
  console.log("✅ Extraction terminée avec succès !");
})();

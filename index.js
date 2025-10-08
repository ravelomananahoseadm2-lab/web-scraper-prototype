import fetch from 'node-fetch';
import cheerio from 'cheerio';

async function main() {
  const url = 'https://en.wikipedia.org/wiki/Web_scraping';
  const res = await fetch(url);
  const html = await res.text();

  const $ = cheerio.load(html);
  const titles = [];
  $('h2').each((i, el) => {
    titles.push($(el).text().trim());
  });

  console.log('Titles found:', titles);
}

main();

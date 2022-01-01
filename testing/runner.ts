import puppeteer from 'puppeteer';

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://joshivaibhavs.github.io/q-and-ace/');
  await page.waitForSelector('h1.logo');
  const el = await page.$('section#hero');
  if (!el) return console.log('No element found!');
  const styles = await el.evaluate((e) => e);
  console.log(getComputedStyle(styles));
};

main()
  .then(() => process.exit())
  .catch(process.exit);
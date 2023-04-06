const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.google.com/');

  await page.fill('input[name="q"]', 'Hello, Playwright!');
  await page.press('input[name="q"]', 'Enter');
  await page.waitForNavigation();

  const title = await page.title();
  console.log(title);

  await browser.close();
})();

const { chromium } = require('playwright');

let browser = null;
let context = null;
let page = null;

beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
})

afterAll(async () => {
    await browser.close();
})

test('Abrir a pagina do google', async () => {
    //const browser = await chromium.launch({ headless: false });
    await page.goto('https://www.google.com/');
    const title = await page.title();
    expect(title).toBe('Google');
})

test('Abrir a pagina da Alura google', async () => {
    //const browser = await chromium.launch({ headless: false });
    //const context = await browser.newContext();
    //const page = await context.newPage();
    await page.goto('https://www.alura.com.br/');
    const title = await page.title();
    expect(title).toBe('Alura | Cursos online de Tecnologia');
})

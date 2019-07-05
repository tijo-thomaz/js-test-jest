const puppeteer = require('puppeteer')
const {generateText,checkAndGenarate}= require('./util');
//unit test
test('output name and age',()=>{
    const text=generateText('tijo',27);
    expect(text).toBe('tijo (27 years old)');
});
test('output data-less text',()=>{
    const text=generateText('',null);
    expect(text).toBe(' (null years old)');
});
//integration
test('generate a valid text',()=>{
    const text=checkAndGenarate('tijo',27);
    expect(text).toBe('tijo (27 years old)');
});

//e2e
test('should click around', async()=>{
    const browser= await puppeteer.launch({
        headless:false,
        slowMo:80,
        args:['--window-size=700,1080']
    });
const page = await browser.newPage();
await page.goto(`file:///Users/tijo/Documents/js-testing-introduction/index.html`);
await page.click('input#name');
await page.type('input#name','Tijo')
await page.click('input#age',);
await page.type('input#name','Tijo')
await page.click('#btnAddUser');
});
//@ts-check

const {test, expect} = require('@playwright/test')

test ('Test1: Reporters', async ({page})=>{
    await page.goto('https://google.com');
});


test ('Test2: Reporters', async ({page})=>{
await page.goto('https://yahoo.com');
});

test ('Test3: Reporters', async ({page})=>{
    await page.goto('https://anz.co.nz');
});
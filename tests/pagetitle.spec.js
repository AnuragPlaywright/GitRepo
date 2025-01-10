// @ts-check
const { test, expect } = require("@playwright/test");

test ('Title check', async ({page}) => {

    await page.goto('https://google.com');
    const pagetitle = await page.title();
    console.log(pagetitle);
    await expect(page).toHaveTitle('Google');
    await page.close();
   });


   




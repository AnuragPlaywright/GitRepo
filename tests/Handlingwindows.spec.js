//@ts-check

// Open multiple pages in one time 

const {test, expect, chromium} = require('@playwright/test');

test ('Handle Pages/Windows', async ()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext(); 

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages = context.pages();
    console.log("No. of pages created: ", allPages.length);

    await page1.goto("https://google.com");

    await page2.goto("https://yahoo.com");

    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(3000);

});


// Navigating to multiple pages -- more real life scenario 


test.only ('Handle Multiple Pages', async ()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext(); 

    const page1 = await context.newPage();
    
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle('OrangeHRM');
    

    // ---- this is important SYNTAX ----

    // here we are saying -- open the new page in memory but wait for the actual event to happen and once
    // that event triggers -- then open that event in this page and show the page on screen too 
    const pagePromise=context.waitForEvent('page');
    // ---- this is important SYNTAX ----

    await page1.locator('a[href="http://www.orangehrm.com"]').click();

    // ---- this is important SYNTAX ----vv
    const newPage=await pagePromise;
    // ---- this is important SYNTAX ----^^

    await expect(newPage).toHaveTitle('Human Resources Management Software | OrangeHRM');
    await newPage.waitForTimeout(3000);

    await browser.close;

});
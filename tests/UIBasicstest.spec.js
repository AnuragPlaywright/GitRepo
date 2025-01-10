//annotation 
const {test,expect} = require('@playwright/test');


test('Test#1:Login Test-Incorrect password', async ({browser})=>
{
    

    const context = await browser.newContext();
    const page = await context.newPage();

//constant declaration 
    const userName = page.locator('#username'); 
    const signIn = page.locator("#signInBtn"); 
    const password = page.locator("[type='password']");
    const terms = page.locator("#terms");    
    const cardTitles = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

//css locator 
    await userName.fill("rahulshettyacademy");
    await password.fill("test123$");
    await terms.check();
    await signIn.click();
//fetch error text 
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

// use fill method to initialise the fields instead of type 
// -- enter correct password and click -- note: usrename is still same as above 
    await password.fill("learning");
    await signIn.click();
    console.log(await cardTitles.nth(0).textContent());
});

//---------------------------------------//


test('Test#2: Login Test-Correct Password', async ({browser})=>
    {
        
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
    //constant declaration 
    
        const userName = page.locator('#username');
        const signIn = page.locator("#signInBtn");
        const password = page.locator("[type='password']");
        const terms = page.locator("#terms");
    
    //css locator 
        await userName.fill("rahulshettyacademy");
        await password.fill("learning");
        await terms.check();
        await signIn.click();
      
    
    });

test('Page Playwright Test', async ({page})=>
{
    
    await page.goto("https://google.com");
    //get title -- out assertion 
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});
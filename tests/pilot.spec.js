import {test, expect} from '@playwright/test'


test('pilot test', async({page})=>{

    await page.goto("https://www.pilot-tech.co/")

    await page.locator("//a[@class='theme-button white w-button']").click()

    await page.locator("//input[@id='name-3']").fill("Anurag")

    await page.locator("//input[@id='name-2']").fill("Verma") 
    
    await page.locator("//input[@id='email-3']").fill("test@mailinator.com")

    await page.locator("//textarea[@id='Message-2']").fill("sample message")

    await page.getByRole("button", {name: 'Send'}).click()    
    
    await page.waitForEvent(4000)
})

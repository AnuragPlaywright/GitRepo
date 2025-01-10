//@ts-check

const {test, expect} = require('@playwright/test')

test("Soft Assertions",async ({page})=>{

    await page.goto('https://demoblaze.com/index.html')
    
    // Hard assertions
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://demoblaze.com/index.html')
    
    // Soft assertions





})

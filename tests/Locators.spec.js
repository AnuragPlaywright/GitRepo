// @ts-check

// anything is correct to import playwright libraries 
//const { test, expect } = require("@playwright/test");
import {test,expect} from '@playwright/test'

// page is a fixture here 
test('Locators', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html')
//    await page.locator('locator').click()
//    await page.click('locator)

// click on login button - property 

    //await page.locator('id=login2').click()
    await page.click('id=login2')

    // enter username  - CSS 
    // use either page.fill/type or locator('').fill()

    //await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername', 'pavanol')
    

    //await page.locator('#loginusername').fill("pavanol")
    
    // provide password - CSS 
    await page.fill("input[id='loginpassword']" ,'test@123')
    
    // click on login button using - XAPTH 
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')

    // verify logout presence - XPATH 
    const logoutlink = await page.locator('//*[@id="logout2"]')  

    // assertion 
    await expect (logoutlink).toBeVisible()

    await page.close()

})


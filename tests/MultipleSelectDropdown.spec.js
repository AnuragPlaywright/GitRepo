//@ts-check

const{test, expect, defineConfig} = require('@playwright/test')

test('Multiselect dropdown', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // select multi options 
    await page.selectOption('#colors', ['Blue', 'Red', 'Green'])

    //*****************//
    // Assertions
    //*****************//
    // -1- CHeck no. of options in the dropdown

    //const options = await page.locator('#colors option')
    //await expect(options).toHaveCount(7)

    // -2- CHeck no. of options in the dropdown using JS array 

    //const optionsArray = await page.$$('#colors option')
    //await expect(optionsArray.length).toBe(7)    
    //console.log('Number of options: ', optionsArray.length)
   
    // -3- Check presence of value in the dropdown 
    const content = await page.locator('#colors').textContent()
    await expect(content?.includes('Blue')).toBeTruthy()
    await expect(content?.includes('Black')).toBeFalsy()

    
    //await page.waitForTimeout(5000)

})
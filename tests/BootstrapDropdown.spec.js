//@ts-check

const{test, expect, defineConfig} = require('@playwright/test')

test('Bootstrap dropdown', async ({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
    
    await page.waitForTimeout(5000);

    await page.locator('.multiselect').click()

    // const options = await page.locator('ul>li label input')
    // await expect(options).toHaveCount(11)

    // --> find all the dd elements into an array

    // const options = await page.$$('ul>li label input')
    // await expect(options.length).toBe(11)

    // --> How to select multiple options from DD
    const options = await page.$$('ul>li label')
    for (let option of options)

        {

            const value = await option.textContent()
            // console.log('The value is: ', value)
            if(value?.includes('Angular') || value?.includes('Java'))
            {
                await option.click()

            }



        }

         // --> How to DE-Select multiple options from DD
    const options1 = await page.$$('ul>li label')
    for (let option of options1)

        {

            const value = await option.textContent()
            // console.log('The value is: ', value)
            if(value?.includes('HTML') || value?.includes('CSS'))
            {
                await option.click()

            }



        }

await page.waitForTimeout(5000);

})

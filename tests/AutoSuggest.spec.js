//@ts-check

const {test, expect} = require('@playwright/test')

test ('Auto Suggest Dropdown', async ({page})=>{

    await page.goto('https://redbus.in')

    await page.locator('#src').fill('Delhi')
    // waiting for options to be loaded
    await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")
    // save options into an array
    const fromCityOptions = await page.$$("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")

    for (let option of fromCityOptions)

        {

            const value = await option.textContent()
            // console.log(value)
            if (value?.includes('ISBT Kashmiri Gate'))

                {
                    option.click()
                    break
                }

        }

        await page.waitForTimeout(5000)



    
})


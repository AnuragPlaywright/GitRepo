//@ts-check

const {test, expect} = require('@playwright/test');

test ('Hidden dropdown', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// Login page 
    await page.locator('[placeholder = "Username"]').fill('Admin');
    await page.locator('[placeholder = "Password"]').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();
// Select PIM
    await page.getByRole('link', {name: 'PIM'}).click();

// Select hidden dropdown  

    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]").click()

    // wait for some time to allow options loading on web page
    await page.waitForTimeout(3000)
//  collect all the dropdown values inside an array

    const roles = await page.$$("//div[@role='listbox']//span")

    for(let option of roles)

        {
            const jobTitle = await option.textContent()
            // console.log(jobTitle)

            if (jobTitle.includes('Software Architect'))

                {
                    await option.click()
                    break;

                }


        }

    


    
    await page.waitForTimeout(5000)

    
})


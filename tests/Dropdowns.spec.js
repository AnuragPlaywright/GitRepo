//@ts-check

const {test, expect} = require('@playwright/test');

test ('Dropdown test', async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

//---------------------------------------------------------
// ----------------- Selection process ---------------------
//---------------------------------------------------------

// dropdown you can eithe select one or multiple options 
// Many ways to select dropdown 

// -- OPTION#1 --> Using label to select the DD options 

//await page.locator('#country').selectOption({label: 'India'}); 
//                                             *****
// -- OPTION#2 --> Using visible text 
//await page.locator('#country').selectOption('India'); 
//                                             ****** 
// -- OPTION#3 --> Using value attribute 

//await page.locator('#country').selectOption({value: 'India'}); 
//                                             *************** 

// -- OPTION#4 --> Using Index 

//await page.locator('#country').selectOption({index: 0}); 
//                                          **********

// -- OPTION#5 --> Calling selction option directly 
//await page.selectOption('#country', {index:1});
//                                  **********

//await page.waitForTimeout(5000);

//---------------------------------------------------------
//------------------ Assertions ---------------------------
//---------------------------------------------------------
// Method 1) check no. of options in dropdown and capture inside var 


//const options = await page.locator('#country option'); // option inside locator is a <tagname> 

//await expect(options).toHaveCount(10);

// Method 2) check no. of options in dropdown and capture inside Array [] --> Use $$ to return DD options in Array format 

//const options = await page.$$('#country option'); // option inside an Array 

//console.log('No. of options:', options.length);

//await page.waitForTimeout(5000);

// Check presense of an element/value in DD 

//const content = await page.locator('#country').textContent(); // text content of this DD returning all options in strings format 

//await expect(content.includes('India')).toBeTruthy();

// check presence of an element in DD using LOOP

/*

const options = await page.$$('#country option'); // option inside an Array 
let status = false;

for (const option of options)

    {
        //console.log(await option.textContent());
        let value = await option.textContent();
        if (value.includes('France'))
            {
                status=true;
                break;

            }   

    }
    await expect(status).toBeTruthy();
*/

// -- Select the DD using  loop

const options = await page.$$('#country option');
for (const option of options)
{
    let value = await option.textContent();
    if (value?.includes('France'))
    {
        await page.selectOption('#country', value);
        break;

    }


}


    
})
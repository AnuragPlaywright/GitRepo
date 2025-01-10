//@ts-check

const {test, expect} = require('@playwright/test');

test ('Handle multiple checkboxes', async({page})=>{

await page.goto('https://www.thewarehouse.co.nz/search?q=storage');

//declare an array containing locators of selected checkbox items

const productType = await page.locator("//div[@data-refinement='refinement-product-type']");
await productType.click();
await expect(productType).toBeVisible();
await page.screenshot({path: 'warehouse product type.png'});
    
const checkboxlocators = [
    '//div[@class="refinement refinement-product-type"]//li[1]//button[1]'
    //'//div[@class="refinement refinement-product-type"]//li[1]//button[3]',
    //'//div[@class="refinement refinement-product-type"]//li[1]//button[5]'
    
];

for(const locator of checkboxlocators) //select multiple checkboxes
{
await page.locator(locator).click();
}



//await page.waitForTimeout(10000);

})
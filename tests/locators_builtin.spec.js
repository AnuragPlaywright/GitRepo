/*
•	page.getByRole() to locate by explicit and implicit accessibility attributes.
•	page.getByText() to locate by text content.
•	page.getByLabel() to locate a form control by associated label's text.
•	page.getByPlaceholder() to locate an input by placeholder.
•	page.getByAltText() to locate an element, usually image, by its text alternative.
•	page.getByTitle() to locate an element by its title attribute.
•	page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

const {test,expect} = require('@playwright/test');


// test ('label', async ({page}) => {write test here});
// pass 'page' fixture 

test ('Bulin-in Locators',async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();
   
    //get by placeholder - for input elements 
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
  
    // get by Role 
    await page.getByRole('button',{type: 'submit'}).click();
    
    await expect(await page.getByText('Puneet  Superstar')).toBeVisible();

});

test.only('get by role', async ({page}) =>{

    await page.goto('https://demoblaze.com/prod.html?idp_=2');
    await page.getByText('Add to cart').click();



});


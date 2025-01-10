// @ts-check
//Add // @ts-check at the start of each test file when using JavaScript in VS Code to get automatic type checking.

import { test, expect } from '@playwright/test';

test ('test', async ({page}) => 
        {
           
    await page.goto("https://demo.playwright.dev/todomvc/#/");
    await page.getByPlaceholder('What needs to be done?').click();
    await page.getByPlaceholder('What needs to be done?').fill('water the plants');
//    await page.screenshot({path: 'water the plants.png'});
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('feed the dog');
//   await page.screenshot({path: 'feed the dog.png'});
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.locator('li').filter({hasText: 'water the plants'}).getByLabel('Toggle Todo').check();
//    await page.screenshot({path: 'water the plants_checked.png'});
    await page.getByRole('link',{name : 'Completed'}).click();
    await expect(page.getByTestId('todo-title')).toContainText('water the plants');
    await page.getByRole('link',{name : 'Active'}).click();
    await expect(page.getByTestId('todo-title')).toContainText('feed the dog');
});

test.only ('Test#2: Google login test', async({page}) =>
{
await page.goto('https://google.com');
//find my label 
await page.getByLabel('Sign in').click();
await page.screenshot({path :'google click.png'});
// find my css locators 
const signin = page.locator()



});












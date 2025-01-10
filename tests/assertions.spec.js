//@ts-check
// ways to import playwright lib
// require OR import 

//const {test, expect } = require('@playwright/test');
import {test, expect} from '@playwright/test';

// open app url 
    test('Assertion test1', async ({page}) =>{

        await page.goto('https://demo.nopcommerce.com/register');
/*
        // expect(page).toHaveURL()
        await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

        // toBeVisible

        const logoelement = await page.locator('.header-logo');

        await expect(logoelement).toBeVisible();

        // expect(locator).toBeEnabled()

        //await expect(await page.locator('#small-searchitems')).toBeEnabled();

        const searchbox = await page.locator('.search-box-text.ui-autocomplete-input');
   
        const searchbutton =await page.getByRole('button', {name: 'Search'});

        //await expect(searchbox).toBeEnabled();

        await expect(searchbox).toBeVisible();
        await expect(searchbutton).toBeEnabled();
*/        
        // expect Radio button --  toBeChecked() 

        const maleRadioButton = await page.locator('#gender-male');
        await maleRadioButton.click();
        await expect(maleRadioButton).toBeChecked();
        console.log('Male Radio Button is checked as expected');

        // expect Checkbox to be checked 

        const newsLetterCheckbox = await page.locator('#Newsletter');
        await newsLetterCheckbox.check();
        await expect(newsLetterCheckbox).toBeChecked();
        console.log('NewsLetter Checkbox is checked as expected');

        //await page.pause();

        expect(test.info().errors).toHaveLength(0);
    });
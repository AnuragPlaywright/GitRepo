//@ts-check
const { test, expect } = require('@playwright/test')
const nodemailer = require('nodemailer')


test('ANZ Home Loan Rates', async ({ page }) => {

        await page.goto('https://www.anz.co.nz/rates-fees-agreements/home-loans/');

        const oneYearRate = await page.locator("//*[@data-id='/home-loan-special-interest-rates/fixed-rates/base-rate/HFRNZ1ILE']").textContent();
        const oneYearRateFloat = parseFloat(oneYearRate);

        if (oneYearRateFloat < 5.79) {
                console.log('Hurray!! One year rate changed, new rate: ', oneYearRateFloat), '%';

        } else {
                console.log('Oops...One year rate not changed, old rate: ', oneYearRateFloat, '%');

        }

        const sixMonthsRate = await page.locator("//*[@data-id='/home-loan-special-interest-rates/fixed-rates/base-rate/HFRNZ6MILE' and @data-field ='ratevalue']").textContent();
        const sixMonthsRateFloat = parseFloat(sixMonthsRate);

        if (sixMonthsRateFloat < 6.24) {
                console.log('Hurray!! Six months rate changed, new rate: ', sixMonthsRateFloat, '%');

        } else {
                console.log('Oops...Six months rate changed, old rate: ', sixMonthsRateFloat, '%');

        }




});

// npx playwright test ANZHomeLoanRateChange
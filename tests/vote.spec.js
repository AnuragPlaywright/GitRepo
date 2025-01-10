//@ts-check

const { test, expect } = require("@playwright/test");

test ('vote', async ({page}) =>{

    await page.goto('https://artcompetition.co.nz/art-contest/4872/');
    await page.click('//*[@id="post-1873"]/div/div/div[2]/div[2]/div[1]/a[1]/i');
    await page.screenshot({path: 'vote.png'});
    await page.close();
    

});
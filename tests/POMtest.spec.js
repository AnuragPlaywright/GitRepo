//@ts-check

import {test, expect} from '@playwright/test';
import { LoginPage } from '../pagesobject/LoginPage';
import { HomePage } from '../pagesobject/HomePage';
import { CartPage } from '../pagesobject/CartPage';

test ('POM Test', async ({page})=>{

// Login 
// Create an object of login page 

const login = new LoginPage(page);
await login.gotoLoginPage();
await login.login('pavanol', 'test@123');
await page.waitForTimeout(3000);


// Home  

const home = new HomePage(page);
await home.addProductToCart("Nexus 6");
await page.waitForTimeout(3000);
await home.gotoCart();



// Cart 

const cart = new CartPage(page);
await page.waitForTimeout(3000);
const status = await cart.checkProductInCart("Nexus 6")
await expect(status).toBeTruthy();

});
//@ts-check

const {test, expect} = require('@playwright/test');
const { skip } = require('node:test');


test ('InputBox test1', async({page})=> {

    console.log('test1')
    
});


test.only ('InputBox test2', async({page})=> {

    console.log('test2')
    
});


test.only ('InputBox test3', async({page})=> {

    console.log('test3')
    
});





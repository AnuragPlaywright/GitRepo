
// Note: while running command in Powershell use single/double quotes for the tag '@tag' OR "@tag"
import {test, expect} from '@playwright/test';

test ('Test 1@fast', async ({page})=>{
console.log('I am test1-fast')
});

test ('Test 2@reg', async ({page})=>{
console.log('I am test2-regression')
});

test ('Test 3@fast', async ({page})=>{
console.log('I am test3-fast')
});

test ('Test 4@reg@sanity', async ({page})=>{
    console.log('I am test4-regression and sanity')
    });
    
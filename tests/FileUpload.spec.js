
//@ts-check

const {test, expect} = require('@playwright/test')

test ('Single File', async ({page})=>{








    
})


test.only ('Multiple File', async ({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload')
            .setInputFiles(['d:/Test files/Testfile1.txt',
                            'd:/Test files/Testfile2.txt']);


    await page.waitForTimeout(3000);

    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('Testfile1.txt');
    await expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('Testfile2.txt');


    










    
})


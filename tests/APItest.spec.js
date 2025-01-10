//@ts-check

// notice the 'fixture' here is -- "request" and not "page" unlike web automation 

const { test, expect } = require('@playwright/test')

var userid; 

test('Read-GET user', async ({ request }) => {

    const response=   await request.get('https://reqres.in/api/users/3');
    console.log(await response.json());
    await expect(response.status()).toBe(200);
    

});


test('Create-POST user', async ({ request }) => {

        const response = await request.post('https://reqres.in/api/users', 
                {
                data:{
                        "name": "jack",
                        "job": "dawson"
                    }, 
                    headers: {
                        "Content-Type": "application/json"

                    }

                }

        );

        console.log(await response.json());
        await expect(response.status()).toBe(201);

        var res = await response.json();
        userid = res.id;
        console.log("Created user id:", userid);


});


test.only('Update-PUT user', async ({ request }) => {

        const response = await request.put('https://reqres.in/api/users/956', 
            {
            data:{
                    "name": "jack",
                    "job": "mittal"
                }, 
                headers: {
                    "Content-Type": "application/json"

                }

            }
            
    );
        console.log(response);
        console.log(await response.json());
        await expect(response.status()).toBe(200);

        await expect ((await request.get('https://reqres.in/api/users/956')).status()).toBe(200);
        // console.log(getresponse);
        // console.log(await newres.json());
        // await expect(newres.status()).toBe(200);

});

test.only('Delete-DELETE user', async ({ request }) => {

        const response = await request.delete('https://reqres.in/api/users/956');
        console.log(await response.json());
        await expect(response.status()).toBe(204);
});
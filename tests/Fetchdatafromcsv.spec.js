//@ts-check

// // 2. import required libraries 

// import {test, expect} from '@playwright/test'
// import fs from 'fs'; //module to interact with file system 
// import path from 'path' // path provides utlity for working with file and directory paths  
// import { parse } from 'csv-parse/sync'; //using sync API for csv parse module 

// // 3. Store CSV data in a variable
// const records = parse(fs.readFileSync(path.join(__dirname, 'download.csv')), {
//     columns:true, //if first line of the file contains columns 
// skip_empty_lines: true,
// });

// records.forEach((element) => {

//     console.log(element)
    
// });

// // 4. Iterate over csv data 
// for (const record of records) {

//     test('Test Case', async({})=>{

//         console.log( record.test_case, record.username, record.password)


//     })
    

// }



const arr = [1, 2, 3, 4, 5];

arr.forEach((item) => {
    console.log(item);
});





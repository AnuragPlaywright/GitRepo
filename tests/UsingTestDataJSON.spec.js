//@ts-check

import {test, expect} from '@playwright/test';
//Json->string->js object 
const dataset = JSON.parse(JSON.stringify(require("../utils/Placeordertestdata.json")));

// now you can use data from test data JSON (util folder) with dataset.username etc. --> this way you are using test data set used globally 
// by other users 






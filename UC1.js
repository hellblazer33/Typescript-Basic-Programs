"use strict";
exports.__esModule = true;
var crypto_1 = require("crypto");
var IS_FULL_TIME = 1;
var empCheck = (0, crypto_1.randomBytes)(1).readUInt8(0) % 2;
if (empCheck === IS_FULL_TIME) {
    console.log('Employee is present');
}
else {
    console.log('Employee is absent');
}

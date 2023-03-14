"use strict";
exports.__esModule = true;
var crypto_1 = require("crypto");
var IS_PART_TIME = 1;
var IS_FULL_TIME = 2;
var EMP_RATE_PER_HOUR = 20;
var empHrs = 0;
var empWage = 0;
var empCheck = (0, crypto_1.randomBytes)(1).readUInt8(0) % 3;
if (empCheck === IS_PART_TIME) {
    empHrs = 4;
}
else if (empCheck === IS_FULL_TIME) {
    empHrs = 8;
}
empWage = empHrs * EMP_RATE_PER_HOUR;
console.log("Emp Wage: ".concat(empWage));
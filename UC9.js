var IS_PART_TIME2 = 1;
var IS_FULL_TIME2 = 2;
var Uc9 = /** @class */ (function () {
    function Uc9(company, empRatePerHour, numOfWorkingDays, maxHoursPerMonth) {
        this.company = company;
        this.empRatePerHour = empRatePerHour;
        this.numOfWorkingDays = numOfWorkingDays;
        this.maxHoursPerMonth = maxHoursPerMonth;
    }
    Uc9.prototype.computeEmpWage = function () {
        var empHrs = 0;
        var totalEmpHrs = 0;
        var totalWorkingDays = 0;
        while (totalEmpHrs <= this.maxHoursPerMonth && totalWorkingDays < this.numOfWorkingDays) {
            totalWorkingDays++;
            var empCheck = Math.floor(Math.random() * 3);
            switch (empCheck) {
                case IS_PART_TIME2:
                    empHrs = 4;
                    break;
                case IS_FULL_TIME2:
                    empHrs = 8;
                    break;
                default:
                    empHrs = 0;
            }
            totalEmpHrs += empHrs;
        }
        this.totalEmpWage = totalEmpHrs * this.empRatePerHour;
    };
    return Uc9;
}());
var dMart = new Uc9("DMart", 20, 2, 10);
dMart.computeEmpWage();
console.log("Total Emp Wage for company: ".concat(dMart.company, " is : ").concat(dMart.totalEmpWage));
var reliance = new Uc9("Reliance", 10, 4, 20);
reliance.computeEmpWage();
console.log("Total Emp Wage for company: ".concat(reliance.company, " is : ").concat(reliance.totalEmpWage));

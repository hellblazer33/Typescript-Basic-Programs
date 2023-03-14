var HelloWorld;
(function (HelloWorld) {
    var IS_PART_TIME = 1;
    var IS_FULL_TIME = 2;
    var ComputeEmpWageForMultipleCompanies = /** @class */ (function () {
        function ComputeEmpWageForMultipleCompanies() {
        }
        ComputeEmpWageForMultipleCompanies.prototype.ComputeEmpWage = function (company, empRatePerHour, numOfWorkingDays, maxHoursPerMonth) {
            var empHrs = 0;
            var totalEmpHrs = 0;
            var totalWorkingDays = 0;
            while (totalEmpHrs <= maxHoursPerMonth && totalWorkingDays < numOfWorkingDays) {
                totalWorkingDays++;
                var empCheck = Math.floor(Math.random() * (3 - 0 + 1) + 0);
                switch (empCheck) {
                    case IS_PART_TIME:
                        empHrs = 4;
                        break;
                    case IS_FULL_TIME:
                        empHrs = 8;
                        break;
                    default:
                        empHrs = 0;
                        break;
                }
                totalEmpHrs += empHrs;
                console.log("Days#: ".concat(totalWorkingDays, " Emp Hrs : ").concat(empHrs));
            }
            var totalEmpWage = totalEmpHrs * empRatePerHour;
            console.log("Total Emp Wage for company: ".concat(company, " is : ").concat(totalEmpWage));
            return totalEmpWage;
        };
        return ComputeEmpWageForMultipleCompanies;
    }());
    var p = new ComputeEmpWageForMultipleCompanies();
    p.ComputeEmpWage("dmart", 20, 2, 10);
})(HelloWorld || (HelloWorld = {}));

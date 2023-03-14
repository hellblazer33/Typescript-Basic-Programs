var HelloWorld;
(function (HelloWorld) {
    var IS_PART_TIME = 1;
    var IS_FULL_TIME = 2;
    var EMP_RATE_PER_HOUR = 20;
    var NUM_OF_WORKING_DAYS = 20;
    var MAX_HRS_IN_MONTH = 100;
    function CalculateWageTill100HrsOr20IsReached() {
        var empHrs = 0;
        var totalEmpHrs = 0;
        var totalWorkingDays = 0;
        while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
            totalWorkingDays++;
            var empCheck = Math.floor(Math.random() * 3);
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
        var totalEmpWage = totalEmpHrs * EMP_RATE_PER_HOUR;
        console.log("Total Emp Wage: ".concat(totalEmpWage));
    }
    CalculateWageTill100HrsOr20IsReached();
})(HelloWorld || (HelloWorld = {}));

var HelloWorld2;
(function (HelloWorld2) {
    var IS_PART_TIME = 1;
    var IS_FULL_TIME = 2;
    var EMP_RATE_PER_HOUR = 20;
    var NUM_OF_WORKING_DAYS = 20;
    function calculateWagesFor20DaysInMonth() {
        var empHrs = 0;
        var empWage = 0;
        var totalEmpWage = 0;
        for (var day = 0; day < NUM_OF_WORKING_DAYS; day++) {
            var empCheck = Math.floor(Math.random() * 3); // 0,1,2
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
            empWage = empHrs * EMP_RATE_PER_HOUR;
            totalEmpWage += empWage;
        }
        console.log("Total Emp Wage: ".concat(totalEmpWage));
    }
    calculateWagesFor20DaysInMonth();
})(HelloWorld2 || (HelloWorld2 = {}));

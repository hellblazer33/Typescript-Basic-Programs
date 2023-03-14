
const IS_PART_TIME0 = 1;
const IS_FULL_TIME0 = 2;
const EMP_RATE_PER_HOUR0 = 20;
const NUM_OF_WORKING_DAYS0 = 20;
const MAX_HRS_IN_MONTH0 = 100;

function CalculateWageTill100HrsOr20IsReached() {
  let empHrs = 0;
  let totalEmpHrs = 0;
  let totalWorkingDays = 0;
  while (totalEmpHrs <= MAX_HRS_IN_MONTH0 && totalWorkingDays < NUM_OF_WORKING_DAYS0) {
    totalWorkingDays++;
    const empCheck = Math.floor(Math.random() * 3);
    switch (empCheck) {
      case IS_PART_TIME0:
        empHrs = 4;
        break;
      case IS_FULL_TIME0:
        empHrs = 8;
        break;
      default:
        empHrs = 0;
        break;
    }
    totalEmpHrs += empHrs;
    console.log(`Days#: ${totalWorkingDays} Emp Hrs : ${empHrs}`);
  }
  const totalEmpWage = totalEmpHrs * EMP_RATE_PER_HOUR;
  console.log(`Total Emp Wage: ${totalEmpWage}`);
}

CalculateWageTill100HrsOr20IsReached();

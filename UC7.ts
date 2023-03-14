


const EMP_RATE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 2;
const MAX_HRS_IN_MONTH = 10;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;

  function computeEmpWage(): void {
    let empHrs = 0;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
      totalWorkingDays++;
      const empCheck = Math.floor(Math.random() * 3);
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
      console.log(`Days#: ${totalWorkingDays} Emp Hrs : ${empHrs}`);
    }
    const totalEmpWage = totalEmpHrs * EMP_RATE_PER_HOUR;
    console.log(`Total Emp Wage: ${totalEmpWage}`);
    
  }

  computeEmpWage()




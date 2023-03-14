namespace HelloWorld2{

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMP_RATE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;


  function calculateWagesFor20DaysInMonth(): void {
    let empHrs = 0;
    let empWage = 0;
    let totalEmpWage = 0;
    for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
      const empCheck = Math.floor(Math.random() * 3);    // 0,1,2
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
    console.log(`Total Emp Wage: ${totalEmpWage}`);
    
  }
  calculateWagesFor20DaysInMonth();
  


}



namespace HelloWorld {
  const IS_PART_TIME = 1;
  const IS_FULL_TIME = 2;

  class ComputeEmpWageForMultipleCompanies {
     ComputeEmpWage(company: string, empRatePerHour: number, numOfWorkingDays: number, maxHoursPerMonth: number): number {
      let empHrs = 0;
      let totalEmpHrs = 0;
      let totalWorkingDays = 0;
      

      while (totalEmpHrs <= maxHoursPerMonth && totalWorkingDays < numOfWorkingDays) {
        totalWorkingDays++;
        const empCheck = Math.floor(Math.random() * (3 - 0 + 1) + 0)
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
      const totalEmpWage = totalEmpHrs * empRatePerHour;
      console.log(`Total Emp Wage for company: ${company} is : ${totalEmpWage}`);
      return totalEmpWage;
    }

    
  }
  const p = new ComputeEmpWageForMultipleCompanies();
  p.ComputeEmpWage("dmart",20,2,10);

  
}


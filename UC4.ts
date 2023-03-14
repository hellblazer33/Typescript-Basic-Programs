import { randomBytes } from 'crypto';


  
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const EMP_RATE_PER_HOUR = 20;

    
      let empHrs = 0;
      let empWage = 0;

      const empCheck = randomBytes(1).readUInt8(0) % 3;
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
      console.log(`Emp Wage: ${empWage}`);
    
  


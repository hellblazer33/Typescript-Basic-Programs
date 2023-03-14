import { randomBytes } from 'crypto';


      const IS_FULL_TIME = 1;
      const EMP_RATE_PER_HOUR = 20;

      let empHrs = 0;
      let empWage = 0;

      const empCheck = randomBytes(1).readUInt8(0) % 2;
      if (empCheck === IS_FULL_TIME) {
        empHrs = 8;
      }

      empWage = empHrs * EMP_RATE_PER_HOUR;
      console.log(`Emp Wage: ${empWage}`);
 

import { randomBytes } from 'crypto';


 
      const IS_FULL_TIME = 1;
      const empCheck = randomBytes(1).readUInt8(0) % 2;   //generates modulo of number outputs 1 or 0
      if (empCheck === IS_FULL_TIME) {
        console.log('Employee is present');
      } else {
        console.log('Employee is absent');
      }
      
    
    
  
  


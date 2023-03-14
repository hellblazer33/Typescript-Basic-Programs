

const IS_PART_TIME2 = 1;
const IS_FULL_TIME2 = 2;

class Uc9 {
    company: string;
    empRatePerHour: number;
    numOfWorkingDays: number;
    maxHoursPerMonth: number;
    totalEmpWage: number;

    constructor(company: string, empRatePerHour: number, numOfWorkingDays: number, maxHoursPerMonth: number) {
        this.company = company;
        this.empRatePerHour = empRatePerHour;
        this.numOfWorkingDays = numOfWorkingDays;
        this.maxHoursPerMonth = maxHoursPerMonth;
    }

    computeEmpWage(): void {
        let empHrs: number = 0;
        let totalEmpHrs: number = 0;
        let totalWorkingDays: number = 0;
        while (totalEmpHrs <= this.maxHoursPerMonth && totalWorkingDays < this.numOfWorkingDays) {
            totalWorkingDays++;
            let empCheck: number = Math.floor(Math.random() * 3);
            switch (empCheck) {
                case IS_PART_TIME2:
                    empHrs = 4;
                    break;
                case IS_FULL_TIME2:
                    empHrs = 8;
                    break;
                default:
                    empHrs = 0;
            }
            totalEmpHrs += empHrs;
        }
        this.totalEmpWage = totalEmpHrs * this.empRatePerHour;
    }
}

const dMart = new Uc9("DMart", 20, 2, 10);
dMart.computeEmpWage();
console.log(`Total Emp Wage for company: ${dMart.company} is : ${dMart.totalEmpWage}`);

const reliance = new Uc9("Reliance", 10, 4, 20);
reliance.computeEmpWage();
console.log(`Total Emp Wage for company: ${reliance.company} is : ${reliance.totalEmpWage}`);

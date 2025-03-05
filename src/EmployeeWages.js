// uc1
const isPresent = Math.random() > 0.5 ? true : false;

// uc2
const getDailyWage = () => {
    let empCheck = Math.floor(Math.random() * 3);
    let empHour = 0;

    switch(empCheck) {
        case 1:
            empHour = 4;
            break;
        case 2:
            empHour = 8;
            break;
        default:
            empHour = 0;
    }

    return empHour * 20;
}

// uc1
console.log(isPresent);
// uc2
console.log(getDailyWage());
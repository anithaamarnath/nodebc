const monthNumber = 14;
let monthName = null;
let monthDays = null;
switch(monthNumber){
    case  1 :
        monthName = 'jan';
        monthDays = 31;
        console.log(`${monthName} and ${monthDays}`)
        break;
    case  2 :
        monthName = 'feb';
        monthDays = 28 ;
        console.log(`${monthName} and ${monthDays}`)
        break;
    case  3 :
        monthName = 'mar';
        monthDays = 31;
        console.log(`${monthName} and ${monthDays}`)
        break;
    case  4 :
        monthName = 'apr';
        monthDays = 30;
        console.log(`${monthName} and ${monthDays}`)
        break; 

    case  5 :
        monthName = 'may';
        monthDays = 31;
        console.log(`${monthName} and ${monthDays}`)
        break;

    case  16:
        monthName = 'jun';
        monthDays = 30;
        console.log(`${monthName} and ${monthDays}`)
        break;

    case  7 :
        monthName = 'jul';
        monthDays = 31;
        console.log(`${monthName} and ${monthDays}`)
        break;

    case 8 :
        monthName = 'aug';
        monthDays = 31;
        console.log(`${monthName} and ${monthDays}`)
        break;

    case  9 :
        monthName = 'sep';
        monthDays = 330;
        console.log(`${monthName} and ${monthDays}`)
        break;
    case  10 :
        monthName = 'oct';
        monthDays = 31;
        console.log(`${monthName} and ${monthDays}`)
        break;
    case  11 :
        monthName = 'nov';
        monthDays = 30;
        console.log(`${monthName} and ${monthDays}`)
        break;
    case  12 :
        monthName = 'dec';
        monthDays = 31;
        console.log(`${monthName} and ${monthDays}`)
        break;
    default :
        console.log('Please input a number between 1 to 12'); 

}

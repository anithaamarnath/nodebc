const weekdayNumber = 3;
let message = null;
switch(weekdayNumber){
    case 1:
        message = "Today it's Monday'";
        break;
      case 2:
        message = "Today it's Tuesday";
        break;
      case 3:
        message = "Today it's Wednesday";
        break;
      case 4:
        message = "Today it's Thursday";
        break;
      case 5:
        message = "Today it's Friday";
        break;
        case 6:
        message = "Today it's Saturday";
        break;
        case 7:
        message = "Today it's Sunday";
        break;
       default:
         message = 'Please input a number between 1 and 7';
}

 console.log("This is from Switch Statement",message);

if(weekdayNumber == 1){
    console.log("This is from IF statement Today it's Monday");

} else if (weekdayNumber == 2) {
    console.log("This is from IF statement Today it's Tuesday");
} else if (weekdayNumber == 3) { 
    console.log("This is from IF statement Today it's Wednesday");
} else if(weekdayNumber == 4) {
    console.log("This is from IF statement Today it's Thursday");
} else if(weekdayNumber == 5) {
    console.log("This is from IF statement Today it's Friday");
} else if(weekdayNumber == 6) {
    console.log("This is from IF statement Today it's Saturday");
} else if(weekdayNumber == 7){
    console.log("This is from IF statement Today it's Sunday");
} else {
    console.log('This is from IF statement Please input a number between 1 and 7');
}



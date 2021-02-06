let hour = 5;
  
if((hour >= 5) && (hour <= 12)){
    console.log("Good Morning");

} if((hour > 12) && (hour <= 18)){
    console.log("Good Afternoon");
} if((hour>18) && (hour<=22)){
    console.log("Good Evening");
} if((hour > 22) && (hour <= 24) || (hour > 0) && (hour < 5)){
    console.log("Good Night");
}


let num = 0;
let sum = 0;
do{
    if(num % 2 == 0){
        console.log(num);
        sum += num; 
        console.log('Sum',sum);
    }
   num++;
    
} while(num <= 1000)
let num = 0;
let sum = 1;
while(num <= 1000){
    if(num % 2 !== 0){
        console.log(num);
        sum += num; 
        console.log('Sum',sum);
    }
   num++;
    
}
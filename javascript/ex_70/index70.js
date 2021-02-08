let num = 0;
let sum = 0;
while(num <= 1000){
    if(num % 2 !== 0){
        console.log(num);
        sum += num; 
        console.log('Sum',sum);
    }
   num++;
    
}
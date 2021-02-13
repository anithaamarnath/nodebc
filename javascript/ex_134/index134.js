let number = [];
let result = 0;


for (let i = 0; i <= 1000; i++){
    number.push(i)
    result += i;
    console.log(result); 
    
    
};

if(result === 500500){
    console.log('Good Job!!!')
} else {
    console.log('Take a look to see if something is wrong')
}
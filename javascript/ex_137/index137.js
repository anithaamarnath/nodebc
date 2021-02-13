let numbers = [];



for (let i = 1; i <= 1000; i++){
    numbers.push(i)  
    
};

numbers.map(function(number, index){
console.log(`index: ${index+1}, original number: ${number} , incremented value: ${number+10}`);
})






let numbers = [];




for (let i =1000; i >= 1; i--){
    
    numbers.push(i)  
     
};

const evenNumbers = numbers.filter(function(number){
    console.log(number);
    return number % 2 === 0;
    
} );
const oddNumbers = numbers.filter(function(number){
    //console.log(number);
    return number % 2 !== 0;
    
} );

console.log(evenNumbers);
console.log(oddNumbers);
oddNumbers.forEach(function(odd){
    odd >= 979 ? console.log("Last 10 odd number",odd) : null;
})

console.log(oddNumbers);


evenNumbers.forEach(function(even){
    even <= 40 ? console.log("First 20 even number",even) : null;
})
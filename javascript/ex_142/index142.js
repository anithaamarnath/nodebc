let firstPerson = ['Anitha','Amarnath','Devdarshan',30];
let secondPerson = ['Honey','bonda','oli',20];

firstPerson = ['Anitha','Amarnath','surrey',30];
secondPerson = ['Amarnath','Aajikannu','surey',40];

const result1 = firstPerson.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
})

const result2 = secondPerson.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
})
console.log(result1);
console.log(result2);


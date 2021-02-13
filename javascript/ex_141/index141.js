const tripExpensive = [ 250, 300, 100];

const budget = tripExpensive.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;;
})

console.log(budget);
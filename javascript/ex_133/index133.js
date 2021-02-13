let mutants = ["Professor X",
    "Cyclops",
    "Iceman",
    "Angel",
    "Magneto",
    "Beast",
    "Phoenix",
    "Logan",
    "Gambit"]

for(let i = 0; i < mutants.length; i++){
    if(mutants[i] === 'Magneto'){
        continue;
    } else {
        console.log("Mutants", mutants[i].toUpperCase());
    }

}
const newArray = mutants.filter(function(mutant){
    return mutant !== 'Magneto'
})

console.log("Removed Magneto",newArray)

newArray.forEach(function(mutant){
console.log('Without Magneto', mutant.toUpperCase());
});




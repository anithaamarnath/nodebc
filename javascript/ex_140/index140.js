let mutants = ["Professor X",
    "Cyclops",
    "Iceman",
    "Angel",
    "Magneto",
    "Beast",
    "Phoenix",
    "Logan",
    "Gambit"]

const newMutant = mutants.filter( function(mutant){ 
    return (mutant !== 'Professor X' && mutant !== 'Iceman' && mutant !== 'Gambit');
});

//console.log(mutants);

console.log("New Array", newMutant);

    
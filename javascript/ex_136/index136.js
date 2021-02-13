let mutants = ["Professor X",
    "Cyclops",
    "Iceman",
    "Angel",
    "Magneto",
    "Beast",
    "Phoenix",
    "Logan",
    "Gambit"]

    let result = '';
    mutants.forEach(function(mutant){
        if(mutant === 'Iceman' || mutant === 'Logan' || mutant === 'Phoenix'){
            result = mutant;
            console.log(result);
        } 
    })

   
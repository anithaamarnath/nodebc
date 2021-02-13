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

// for(let i = 0; i < mutants.length; i++){
//     if(mutants[i] === 'Magneto'){
//         mutants = mutants[i].pop();
//     } else {
//         console.log("Mutants", mutants[i]);
//     }

// }




const mutants = ['Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Phoenix',
    'Logan']




console.log(mutants.indexOf('Professor X')) 
console.log(mutants.indexOf('Logan'))//0;


let xmen = ((mutants.indexOf('Professor X') )|| (mutants.indexOf('Logan'))) ? console.log('We love X-Men') : console.log('X-Men sucks') 

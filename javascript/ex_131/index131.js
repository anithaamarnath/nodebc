let femaleStudents = [ 'anitha', 'abi', 'abirami', 'dev', 'srilakshmi', 'durga' ];
let maleStudents = ['Sathya','Diwakaran','vignesh','venkatesh','Neelamegan'];

let students = femaleStudents.concat(maleStudents);

// Female Students name using numeric indexes
console.log('FemaleStudents 1 ', femaleStudents[0]); // anitha
console.log('FemaleStudents 2 ', femaleStudents[1]); // abi
console.log('FemaleStudents 3 ', femaleStudents[2]); // abirami
console.log('FemaleStudents 4 ', femaleStudents[3]); // dev
console.log('FemaleStudents 5 ', femaleStudents[4]); //srilakshmi
console.log('FemaleStudents 6 ', femaleStudents[5]); //durga

// Male Students name using while loop
let student = 0 ;
while( student < maleStudents.length){
    console.log(`Male Students ${[student]} ${maleStudents[student]}` );
    student ++;
    
}


console.log(students);
let students = '       Anitha, Srilakshmi, Abinaya, Abirami,Durga \n';
let result = students.split(',');
let word = 'i';
let searchWord = 'Abirami';




console.log('Student Name:', result);
console.log('Is that :',word, 'in the student list' ,students.includes(word));
console.log('searchWord:', students.indexOf(searchWord));
console.log('Repeate the word', students.repeat( 2));
console.log('Replace the word', students.replace('Anitha', 'Amarnath'));
console.log('Trim thr output', students.trim());


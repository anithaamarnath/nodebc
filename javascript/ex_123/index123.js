const animals = ['dog', 'duck', 'cow'];
const dog = animals.shift();

console.log(animals);
// ['duck', 'cow']

console.log(animals.length); // 2

const duck = animals.shift();

console.log(animals);
// ['cow']

console.log(animals.length);
// 1

const cow = animals.shift();

console.log(animals);
// []

console.log(animals.length);
// 0
const oneLinerJoke = require('one-liner-joke')
console.log(oneLinerJoke);
let getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.body)
console.log(getRandomJoke.tags)

// for (const key in getRandomJoke) {
//     if (getRandomJoke.hasOwnProperty.call(getRandomJoke, key)) {
//         const element = getRandomJoke[key];
//         console.log("Joke", element);
        
        
//     }
// }

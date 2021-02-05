let playerName = 'Patrik Laine is lame';
let teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
let message = 'Winnipeg is the best Canadian city, Go Winnipeg';
let patrikLaine = playerName.slice(0, -7).toUpperCase()
let isLetter = playerName.slice(-8,-4);
let jetsLetter = teams.slice(-25,-22); 
let jetsFirstLetter = teams.charAt(46).toUpperCase()+ jetsLetter;

let theBestLetter = message.slice(-35,-27);
let goLetter = message.slice(-13,-9);
 


console.log(`${patrikLaine} ${isLetter} ${theBestLetter} ${jetsFirstLetter} player${goLetter} ${jetsFirstLetter}!!`);





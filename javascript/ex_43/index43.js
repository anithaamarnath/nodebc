let text = 'game of thrones';
let firstChar = text.charAt(0)
let secondChar = text.charAt(5);
let thirdChar = text.charAt(8);
let result = firstChar.concat(secondChar,thirdChar);



console.log(`The Final result is: ${result.toUpperCase()}`);
console.log(`An invalid index number ${text.charAt(200)}`);

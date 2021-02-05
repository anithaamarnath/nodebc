let message = "3.14 it's a great number but 42 it's the answer to life";
let pi = parseFloat(message.slice(0,4));
let answetToLife = parseInt(message.slice(29,32));
let result = pi + answetToLife;



console.log(`Pi: ${pi} and Number ${answetToLife} and the result is  ${result}`);


let userAndPAssword = 'pepito2017,12345';
let userName = userAndPAssword.substr(0,10);
let password = userAndPAssword.substr(11, userAndPAssword.length);

console.log("UserName:",userName);
console.log("Password:",password);
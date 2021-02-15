let user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!'
}
let userUpperCase = user.username

let replacePassword = user.password.replace('1960',' ')
console.log("Object",user);
console.log("Username capitial ",userUpperCase.toUpperCase());
console.log('Password replace',replacePassword);

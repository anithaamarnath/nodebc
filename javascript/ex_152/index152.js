let user = {
    username: null,
    password : null,
    greet: function(){
        if(this.username !== null){
            console.log(`Hello, I'm user ${this.username}`)
        } else {
            console.log(`Please assign a username value`);
        }
    },
    updatePassword: function (password){
        this.password = password;
    },
    updateUsername: function (username){
        this.username = username;
    }
}


// console.log(user.updateUsername('anitha'));
// console.log(user.updatePassword('anitha'));
console.log(user.greet());
const greet = (firstName, lastName, message) => {
    console.log(`Hi ${firstName} ${lastName}`);
    message()
   
}
const message = () => {
    console.log(`This code gets executed after the greet function call`)
}


//greet('Anita','Amarnath',message);

module.exports = greet;
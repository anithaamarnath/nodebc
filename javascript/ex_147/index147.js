let user =  {
    username: 'batman',
    password: 'Alfred1960ROCKS!'
}

const shouldOpenBatCave = () => {
    if(user.username === 'batman' && user.password === 'Alfred1960ROCKS!'){
        console.log('Welcomeback backman!!  ')
       return true
    } else {
        console.log('Sorry, you can\'t enter the Batcave, try again..')
        return false;
    }
}

console.log(shouldOpenBatCave());


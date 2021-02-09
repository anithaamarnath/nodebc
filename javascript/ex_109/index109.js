function validatUser(username, password){
    if((username === 'nacho' && password === 'Nerd1979')|| (username === 'pedro' && password === 'Batman0217') || (username === 'marta' && password === 'Mother2312'))  {
        console.log(`Welcome ${username} nice to see you again`)
    } else {
        console.log(`Please input valid credentials`)
    }
}

validatUser('nacho','Nerd1979');
validatUser('anitha','harrypaotter')
function getLongerText(string1, string2){
    if((string1 === string2) || (string1 === 'string' && string2 === 'string')){
        console.log('Please provide any one string longer')
    } else
    if(string1.length > string2.length){
        console.log(`String 1 : ${string1} is Longer Text`);
    } else {
        console.log(`String 2: ${string2} is Longer Text`);
    }
}


getLongerText('anitha', 'amaranth');
getLongerText('amarnath ', 'anitha');
getLongerText('anitha', 'anitha');

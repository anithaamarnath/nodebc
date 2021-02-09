function biggerNumber( firstNumber, secondNumber){
    if(typeof firstNumber === 'string' && typeof secondNumber === 'string'){
        console.log('Please provide valid Number')
    } else
    if(  firstNumber   >  secondNumber ) {
        console.log(`Number ${firstNumber} is bigger than ${secondNumber}`) ;

    } else if( firstNumber <   secondNumber){
        console.log(`Number ${secondNumber} is bigger than ${firstNumber}`) ;
    } else if( firstNumber ===  secondNumber){
        console.log(`Both numbers are ${firstNumber}`) ;
    } 
   

}



biggerNumber(3 , 5);
biggerNumber()
biggerNumber(5 , 5);
biggerNumber('string', 'str')
biggerNumber('string', 'string')
biggerNumber('string', '')






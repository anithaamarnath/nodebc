function even(value){
    if(value % 2 === 0){
        console.log(`${value} is even`);
        return true;
    } else {
        console.log(`${value} is odd`)
        return false;
    }
    
}

even(2);
even(3);
even(5);
even(24);
even(12);


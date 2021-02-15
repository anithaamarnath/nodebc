const arithemetic = {
    add: function(n1,n2){
        return n1 + n2;
    },
    subtract: function(n1,n2){
        return n1 - n2;
    },
    multiply: function(n1,n2){
        return n1 * n2;
    },
    divide: function(n1,n2){
        return n1 / n2;
    },
    remainder: function(n1,n2){
        return n1 % n2;
    }
};

console.log(`Addition: ${arithemetic.add(2, 10)} \n
Subtract: ${arithemetic.subtract(10, 5)} \n
Multiply: ${arithemetic.multiply(3, 100)}\n
Divide:${arithemetic.divide(40, 2)} \n
Remainder:${arithemetic.remainder(20, 2)}`)


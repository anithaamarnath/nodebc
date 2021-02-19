
function add() {
  let result = 0;
  for(let i =0; i< arguments.length; i++ ){
    result += arguments[i];
  }
 return result;
}
console.log(add(1,2,3,4,5,6,7,8,9,10))
console.log(add(1,2,3,4,5))
console.log(add())

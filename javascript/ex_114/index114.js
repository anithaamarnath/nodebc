function revertArray(str){
    let reverse = str.split('').reverse().join('');
    console.log(reverse)

}


function revert(str){
    let result = '';
    for(let i = str.length; i >0 ; i--)
    result += str[i - 1]; 
    console.log(result);
}

revert('anitha');
revertArray('anitha');

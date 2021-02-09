function showNumber(start, end){
    if((start === end) || (start === 'string' && end === 'string')){
        console.log(`Error please provide valid number  `);
    } else 
    if(start > end){
        
        for ( let i = start ; i >=end; i--){
            console.log(`Lower to Higher ${i}`)

        }
    }  else  {
        
        for ( let i = start;  i <= end; i++){

            console.log(`Higher to lower ${i}  `)

        }
    } 
}

showNumber(0, 10);
showNumber(100, 10);
showNumber(0, 0);
showNumber('anitha', 'anitha');


let n =10;
let f =0;
let f1=-1;
let f2 =1;
do{
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(`Fibonacci number for f ${f}`);
    f++;
}while(f < n)


function fibonacci(n){
    let f = 0 ;
    let f1 = -1;
    let f2 = 1;
    for(let i = 0; i < n; i++){
        f = f1 + f2;
        f1 = f2;
        f2 = f;
        console.log(f)
    }
}
fibonacci(10)
fibonacci(10)
fibonacci(10)

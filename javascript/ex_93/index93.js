let star = '*************';


  for(let i = star.length; star.length > 1; i-- ) {
    star = star.slice(0, star.length - 1 );
    console.log(star);
}
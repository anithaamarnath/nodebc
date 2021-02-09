function getShapPerimeter(base, height){
    if(base === height){
        console.log('Perimater of Square:', base * 4 );
    } else if(base !== height){
        console.log('Perimater of rectangle:',2 * (base + height) );

    }
}

getShapPerimeter(2,5);
getShapPerimeter(2,2);


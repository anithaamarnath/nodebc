function getHexColor(color){
    let message;
    
    switch (color) {
      case 'white':
        message = '#FFFFFF';
        break;
      case 'black':
        message = '#000000';
        break;
      case 'blue':
        message = '#0b24fb';
        break;
      case 'green':
        message = '#0e7e12';
        break;
      case 'yellow':
        message = '#fffd38';
        break;
      case 'pink':
        message = '#fec1cc';
        break;
      default:
         message = 'Please provide only  white, black,blue,green,yellow,pink color';
    }
    console.log(message);
}


getHexColor('green');
getHexColor('white');
getHexColor('pink');
getHexColor('black')
getHexColor('orange');
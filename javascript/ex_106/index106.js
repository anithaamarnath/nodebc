function getUserID(){
    return 50;
}
function isUserValid(){
    if(getUserID() > 30){
        return true;
       
    }  else {
        return false;
     
    }
   
}

isUserValid() ? console.log('User valid') : console.log('User not valid');

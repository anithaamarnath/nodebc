const player = {
    name: null,
    energy: 100,
    lives:3,
    loseEnergy : function (damage ){
        //console.log('thughh',damage)
        if(this.energy - damage >= 0){
            return this.loseLife()
        }          
    },
    recoveryEnergy :function (energyUp){
        if(this.energy  !== -1){
        
            return this.energy+energyUp;
        }
       
    },
    loseLife : function() {
        
            return --this.lives;
        
        
    },
    recoverLife : ()=>{
        if(player.energy <= 99){
            return this.lives++;
        }
        
    }
}

//set player name 
player.name = 'anitha';

//console.log(`The ${player.name} has  energy  ${player.energy}  and  ${player.lives} lifes`)

//Player lose a life
//console.log(`${player.loseEnergy(10)}`);

//The %player name% has %energy% energy % and  %lifes% lifes

//console.log(`The ${player.name} has  energy  ${player.energy}  and  ${player.lives} lifes`)
console.log(`${player.recoveryEnergy(10)}`);

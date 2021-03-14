const express = require('express');
const oneLinerJoke = require('one-liner-joke')
const app = express();
const port = 3000;


const getRandomJoke1 = oneLinerJoke.getRandomJoke();
const getRandomJoke2= oneLinerJoke.getRandomJoke();

app.get('/',(req,res)=> {
    
    console.log('show a welcome message')
})

app.get('/jokes',(req,res)=> {
    
    res.send(`${getRandomJoke1.body} \n  ${getRandomJoke2.body}`)
    
})

app.get('/joke',(req,res)=> {
    
    res.send(`${getRandomJoke1.body}`)
    
})

app.post('/joke',(req,res)=> {
    
    res.send(`my jokes are too funny, I'm not getting new ones from you..`)
    
})
app.put('/joke',(req,res)=> {
    
    res.send(` no, no, no.. not changing my act dude!`)
    
})
app.delete('/joke',(req,res)=> {
    
    res.send(` good jokes never get to old`)
    
})

app.all('/joke',(req,res)=> {
    
    res.send(` I know I'm so good that you're looking for jokes everywhere`)
    
})













app.listen(port, (err)=>{
    if(err){
        console.log(`something is wrong`)
    } else {
        console.log(`server is listening ${port}`)
    }
})
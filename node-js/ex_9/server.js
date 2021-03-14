const express = require('express');
const Looger = require('logplease')
const app = express();
const port = 3000;
const logger = Looger.create('utilis')
app.get('/', function(request,response){
    response.send('Congrats you\'re using your first Node.js and Express as Web Server')
})

app.listen(port, (err)=> {
    if(err){
        logger.err('Something bad happened', err)
    } 
    logger.info((`server is listening on ${port}`));
})
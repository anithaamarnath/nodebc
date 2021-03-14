const express = require('express')
const app = express();
// const logger = require('morgan')
const port = 3000;



const requestTime = (req, res, next) =>{
    const message = `Request: ${req.baseUrl} ${Date.now()}`;
    console.log(message);
    next();
}

app.use(requestTime);


app.get('/', (req,res,next)=> {
    res.json({
     "status": 200,
     "message": "Este request/response está OK"});
 })




app.listen(port, function(){
    console.log(`server listening to ${port}`);
})
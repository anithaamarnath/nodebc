const express = require('express');
const app = express();
const port = 3000;

const home = require('./home');
const user = require('./user');



app.use('/', home);
app.use('/users',user);


app.listen(port, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`server listening in port ${port}`)
    }
})

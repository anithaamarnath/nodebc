const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

app.get('/' ,(req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})




app.get('/products' ,(req, res)=>{
    res.sendFile(path.join(__dirname, 'products.html'))
})










app.listen(port, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`server listening in port ${port}`)
    }
})



const express = require('express');
const app = express();
const port = 3000;




app.use('/assets', express.static('public'));

app.listen(port, function(){
    console.log(`server listening to ${port}`);
})
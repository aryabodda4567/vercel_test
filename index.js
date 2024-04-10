const express = require('express');

app = express();

app.get('/', function (req, res){
    res.send("Hello");
});


app.listen(3000,"127.0.0.1", function () { 
    console.log(`Listening at port  https://127.0.0.1:3000/`);
});
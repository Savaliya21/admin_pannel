const express = require('express');

const Port = 3000;
const app = express();

app.listen(Port, function(err){
    if(err){
        console.log('somthing wrong');
    }
    console.log(`server is running ${Port}`);
})

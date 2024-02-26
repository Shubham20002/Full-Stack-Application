const express=require('express');
const port=7000;

const app=express();

//parse incoming requests into object
app.use(express.urlencoded());

app.use('/',require('./routes/index.js'));
//starting express server
app.listen(port,(err)=>{
    if(err){
       console.log("error while starting server on port:"+port);
    }
    else{
        console.log("server started on port no: "+port);
    }
})
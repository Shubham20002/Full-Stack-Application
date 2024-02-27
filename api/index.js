const express=require('express');
const port=3000;
var cors = require('cors')
const app=express();
app.use(cors());

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
const express=require('express');
const router=express.Router();

//importing actions for home routes
const homecontroller=require('../controllers/homecontroler');

router.get('/',homecontroller.getlist);


module.exports=router;
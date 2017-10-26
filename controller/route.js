var express=require("express");
var path=require("path");
var router=express.Router();
 router.get("/",function(req,res){
     return res.render('welcome',{message:"welcome"});
 });

router.use("/login",require(path.join(__dirname,"login")));
router.use("/dashboard",require(path.join(__dirname,"dashboard")));

module.exports=router;
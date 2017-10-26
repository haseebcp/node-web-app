var express=require("express");
var route=express.Router();
var path=require("path");
//var isAuthenticated=require(path.join(__dirname,"app").isAuthenticated);

route.get("/",function(req,res){
    return res.render('dashboard',{message:"welcome"});
});
module.exports=route;
var express=require("express");
var route=express.Router();
var path=require("path");


route.get("/",function(req,res){
    //return res.send('<html><body><h1>hey It working.....</h1></body></html>');
    return res.render('welcome',{message:"welcome"});
});


route.post("/",function(req,res){
    var user={};
    user.name=req.body.username;
    user.pass=req.body.pass;
    if(user.name=="admin@gmail.com"&&user.pass=="admin"){
        req.auth.session.user=user;
        //return res.render("dashboard");
        res.redirect("dashboard");
    }
});

module.exports=route;
var express=require("express");
var bordyParser=require("body-parser");
var favicon=require("serve-favicon");
var engine = require('ejs-locals');
var path=require("path");
var app=express();
var port=process.env.port||8081;
var controlller=require("./controller/route");
var session=require("express-session");
var cookieParser=require("cookie-parser");

app.use(bordyParser());
app.use(controlller);
app.use(express.static(path.join(__dirname,"public")));
app.engine('ejs',engine);
app.set("views",path.join(__dirname,"views"));
app.set('view engine','ejs');
app.use(cookieParser());
app.use(session({"secret":"@123"}));

app.listen(port,function () {
  console.log("app is running on:"+""+port);
  console.log(path.join(__dirname,"app"))
  
});

var isAuthenticated= function checkAuthentication(req,res,next) {
  if(req){
      if(req.session.user){
          next();
      }else{
          res.redirect("welcome");
      }
  }

};
module.exports={
    isAuthenticated:isAuthenticated()

}


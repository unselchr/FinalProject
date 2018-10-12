const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;
const xmlParse = require("fast-xml-parser");
const fs=require("fs");
const xml2 = require("xml2js");
const path=require("path");
const session=require("express-session");
const passport=require("passport");
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({secret:"haeresis",resave:true,saveUninitialized:true})
);
app.use(passport.initialize());
app.use(passport.session());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//PARSE BSData

var bsData=[];

// fs.readdir(__dirname+"/BSData",function(err,files){
//   if(err)throw err;
//   files.forEach(function(file){
//     //console.log(file);
//     fs.readFile(__dirname+"/BSData/"+file,function(err,data){
//       if(err)throw err;
//       //bsData.push({[file]:data.})
//       xml2.parseString(data,function(error,result){
//         bsData.push({[file]:result});
//         //console.log(bsData);
//         fs.writeFileSync(__dirname+"/"+file,JSON.stringify(result));
//       })
//     })
//   })
// })
//app.use(
  require("./routes")(app,passport)
//);
//app.use(routes);
// app.get("/api/hello",(req,res)=>{
//   res.send({express:"hello from express"})
// });
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
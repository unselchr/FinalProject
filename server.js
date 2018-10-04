const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const xmlParse = require("fast-xml-parser");
const fs=require("fs");
const xml2 = require("xml2js");
const path=require("path");
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//PARSE BSData

var bsData=[];
// fs.readFile(__dirname +"/BSData/Imperium - Astra Militarum.cat",function(err,data){
//   if(err){
//     throw err;
//   }
//   //console.log(data);
//   //bsData=xmlParse.convertToJson(data);

//   xml2.parseString(data,function(error,result){
//     if(error) throw error;
//     console.log(result);
//   })
//   //console.log("INCOMMING!");
//   console.log(bsData);
// })
fs.readdir(__dirname+"/BSData",function(err,files){
  if(err)throw err;
  files.forEach(function(file){
    //console.log(file);
    fs.readFile(__dirname+"/BSData/"+file,function(err,data){
      if(err)throw err;
      //bsData.push({[file]:data.})
      xml2.parseString(data,function(error,result){
        bsData.push({[file]:result});
        //console.log(bsData);
        fs.writeFileSync(__dirname+"/"+file,JSON.stringify(result));
      })
    })
  })
})
//console.log(jsonObj);
// Add routes, both API and view
app.use(routes);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
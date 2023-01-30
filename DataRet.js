/*const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SongDetails",{useNewUrlParser:true, useUnifiedTopology: true});

const songSchema = mongoose.Schema({
    _id:String,
    Song_name:String,
    Author:String,
    Singer:String,
    Music_Composer:String,  
    Released_year:Number,
    Type:String,
    Mode:String,
    Quality:Number,
    id: Number

});

const Details= mongoose.model("Details", songSchema);

const app=express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/",(req, res) => {
    res.sendFile('DataRet.html', {root:'Html'});

});

app.post("/",(req, res)=>{
   
    let choice = Number(req.body.choice);

    Details.findById(choice, function(err, result){
        if(err){
            console.log(err);
        }else{
            let openingTable = result.Song_name;

           /* openingTable = openingTable + '<tr>\
                                          <td>' + result.Song_name + '</td>\
                                          <td>' + result.Author+ '</td>\
                                          <td>' + result.Singer + '</td>\
                                          <td>' + result.Music_Composer + '</td>\
                                          <td>' + result.Released_year + '</td>\
                                          </tr>\
                                          </table>'*/
           /* res.send({html: openingTable});                                                 
        }
    })
})
app.listen (4632 || process.env.PORT);*/
const express=require('express')
let path = require("path")
const http= require('http')
const { socket } = require('server/router')
const socketIo= require('socket.io')
const MongoClient=require('mongodb').MongoClient
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 1937

const app=express()
const server=http.createServer(app)

app.use(express.json())
var database

app.use( bodyParser.json() );       // to support JSON-encoded bodies
 
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 
app.use(cors())


//app.use(express.static('Styling/Home.css'))

app.get('/', (req,resp) => {
    resp.send('Welcome to mongodb Api')
})



app.get('/api/Home', (req,res) => {
    res.sendFile('Home.html', {root:'Html'});
});

app.get('/api/Song', (req,res) => {
    res.sendFile('SongPage.html', {root:'Html'});
});

app.get('/Details',(req,res)=>{
    const result=database.collection('Details').find({Song_name:"a"}).toArray((err,result) =>{
        if(err) throw err
        res.send(result)              
        console.log(result)
        req.body.Author=result;
        
       
    })
   
    })

/*app.get('/api/posts',(req, resp) => {
    database.collection('posts').find({}, {name:true}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)
    })

})*/


/*getAllDocs: async () => {
    return await database.collection(Details).find().toArray()
}

app.get("/api/allnames", async (req, res) => {
    const docs = await dbFunctions.getAllDocs()
    res.json(docs) 
})
*/
   
    






//Configure to use statics
// Configure to use statics.
app.use(express.static(path.join(__dirname, "HTML")));


// Setup the websocket.
let io = socketIo(server);

io.on("connection", function(socket) {
    // When a connection is received, emit a "confirm connection"
    // event to the client.
    socket.emit("confirm connection", "Connected...");

    socket.on("request", function(msg) {
        // When a message is received from a client, log it on the
        // console and emit a response.
        socket.emit("response", "Hello from the server");
    });
});


io.on("connection", function(socket) {
    socket.on("send message", function(msg) {
        socket.broadcast.emit("received message", msg);
    });
});







    server.listen(port, () => {
            console.log(`Server is runing on port ${port}`)
        
            MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true}, (error, result) =>{
            if(error) throw error
            database = result.db('SongDetails')
            console.log('Connection successful')
        })
    })

    







/*const express = require('express')
const app = express()
const port = 8569




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/









/*app.get("/",(req, res) => {
    res.rend("table");

});*/

/*app.get("/",(req, res) => {
    
    let choice = '63d0dd9dd6e7d4061f9d4f92';

    Details.findById(choice, function(err, result){
        if(err){
            console.log(err);
        }else{
            console.log(result.Song_name);
        }
    });
   

});*/

/*app.post("/",(req, res)=>{
   
    let choice = '63d0dd9dd6e7d4061f9d4f92';

    Details.findById(choice, function(err, result){
        if(err){
            console.log(err);
        }else{
            /*let openingTable = '<table>\
                                <tr>\
                                <th>Song_name</th>\
                                <th>Author</th>\
                                <th>Singer</th>\
                                <th>Music_Composer</th>\
                                <th>Released_year</th>\
                                <th>Type</th>\
                                <th>Mode</th>\
                                <th>Quality</th>\
                                <th>id</th>\
                                </tr>'
                             

           openingTable = openingTable + '<tr>\
                                          <td>' + result.Song_name + '</td>\
                                          <td>' + result.Author+ '</td>\
                                          <td>' + result.Singer + '</td>\
                                          <td>' + result.Music_Composer + '</td>\
                                          <td>' + result.Released_year + '</td>\
                                          <td>' + result.Type + '</td>\
                                          <td>' + result.Mode + '</td>\
                                          <td>' + result.Quality + '</td>\
                                          <td>' + result.id + '</td>\
                                          </tr>\
                                          </table>'*/

          /*  console.log(result.Song_name)                       
            //res.send({html: openingTable});   
            
                                                       
        }
    })
})*/
//app.listen (4315 || process.env.PORT);























































































































































































































































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
//app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/",(req, res) => {
    res.send("table");

});

app.get("/DataRet",(req, res) => {
    res.sendFile('DataRet.html', {root:'Html'});

    let choice = '63d0dd9dd6e7d4061f9d4f92';

    Details.findById(choice, function(err, result){
        if(err){
            console.log(err);
        }else{
           daisy1='<h3>+result.Song_name+</h3>';

            res.send({html: daisy1}); 
        }


    });

    
   

});*/





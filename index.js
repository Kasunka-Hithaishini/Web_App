const express=require('express')
let path = require("path")
const http= require('http')
const { socket } = require('server/router')
const socketIo= require('socket.io')
const MongoClient=require('mongodb').MongoClient
const mongoose=require("mongoose")
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 1937

// Initialise the app and setver.
const app=express()
const server=http.createServer(app)

app.use(express.json())
var database //Declaring the variable database
app.use( bodyParser.json() );// to support JSON-encoded bodies
//app.use(express.static('Html'))//Can find html files in public directory
app.use(bodyParser.urlencoded({  // to support URL-encoded bodies
extended: true})); 

app.use(cors())

mongoose.connect('mongodb://localhost:27017/SongDetails',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
var db2=mongoose.connection;

db2.on('error',()=>console.log("Error occured when connecting to the database"))
db2.once('open',()=>console.log("Connected to the database"))

app.post("/SignUp",(req,res)=>{
    var name = req.body.name;
    var dob = req.body.dob;
    var Contact_no = req.body.Cno;
    var password = req.body.pwd;

    var data = {
        "name":name,
        "dob":dob,
        "Contact_no":Contact_no,
        "password":password

    }
    db2.collection('UserDetails').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Data inserted successfully");
    });
    return res.redirect('signup_success.html')
})



//Api to display a note 
/*app.get('/', (req,res) => {
    res.send('Welcome to mongodb Api')
})*/

app.get('/', (req,res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('SignUp.html');
})

//Api to display the Home.html page
app.get('/api/Home', (req,res) => {
    res.sendFile('Home.html', {root:'Html'});
});



//Api to display the SongPage.html page
app.get('/api/Song', (req,res) => {
    res.sendFile('SongPage.html', {root:'Html'});
});

//Retrieving data from database
app.get('/Details',(req,res)=>{
    const result=database.collection('Details').find({Song_name:"Cham Cham"}).toArray((err,result) =>{
        if(err) throw err
        res.send(result)              
        console.log(result)
        req.body.Author=result;       
       
    })   
    })

    app.get('/Song',(req,res)=>{
        const result=databasex.collection('posts').find({}).toArray((err,result) =>{
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


// Configure to use statics.
app.use(express.static(path.join(__dirname, "Html")));


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
            databasex = result.db('blog')
            console.log('Connection successful')
        })
    })

    
























































































































































































































































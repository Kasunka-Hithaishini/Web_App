const express=require('express')
let path = require("path")
const http= require('http')
const { socket } = require('server/router')
const socketIo= require('socket.io')
const MongoClient=require('mongodb').MongoClient
const mongoose=require("mongoose")
const bodyParser = require('body-parser')
const cors = require('cors')
const { ObjectId } = require('mongodb')
const port = 1937

// Initialise the app and setver.
const app=express()
const server=http.createServer(app)

// set the view engine to ejs
//app.set('view engine', 'ejs');


app.use(express.json())
var database //Declaring the variable database
app.use( bodyParser.json() );// to support JSON-encoded bodies
//app.use(express.static('Html'))//Can find html files in public directory
app.use(bodyParser.urlencoded({  // to support URL-encoded bodies
extended: true})); 

app.use(cors())

//Sending data to the database with database connection with mongoose
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
    return res.redirect('Home.html');
})

//Api to display the Home.html page
app.get('/api/Home', (req,res) => {
    res.sendFile('Home.html', {root:'Html'});
});



//Api to display the SongPage.html page
app.get('/api/Song', (req,res) => {
    res.sendFile('SongPage.html', {root:'Html'});
});



    /*app.get('/Song',(req,res)=>{
        const result=databasetest.collection('posts').find({}).toArray((err,result) =>{
            if(err) throw err
            res.send(result)              
            console.log(result)
            req.body.Author=result;       
           
        })   
        })*/

        //REtrieving songs and song details from database

        //Asian_Cham_360.mp4 
        app.get('/chamVone',(req,res)=>{
            const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7a5a1ac62aa3f1ef7effb')}).toArray((err,result) =>{
                if(err) throw err
                res.send(result)              
                console.log(result)
                req.body.Author=result;       
               
            })   
            })

            //Asian_Cham_720.mp4
            app.get('/chamVtwo',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7a6147acfbdbd8c9c47e3')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

             //Asian_Cham_Audio.m4a
            app.get('/chamA',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7a69ff73960153ac5a5c0')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Asian_Cham - Song Details
            app.get('/chamSDetails',(req,res)=>{
                const result=database.collection('Details').find({Song_name:"Cham Cham"}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                 //Asian_Chogada_360.mp4
            app.get('/ChogadaVone',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7afd3e0b3eae77e35dc8a')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Asian_Chogada_720.mp4
            app.get('/ChogadaVtwo',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b00d6a55984835ebed33')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                 //Asian_Chogada_Audio.m4a
            app.get('/ChogadaA',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b04f13eb1a32e82c4d76')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Asian_Chagoda - Song Details
            app.get('/ChagodaSDetails',(req,res)=>{
                const result=database.collection('Details').find({Song_name:"Chogada"}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Country_Going_360.mp4
            app.get('/GoingVone',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b08d4897adf1dd375f88')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

             //Country_Going_720.mp4
            app.get('/GoingVtwo',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b0c4ced3e0ce515cacee')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

            //Country_Going_Audio.m4a
            app.get('/GoingA',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b0dd5b22e9e584fb33c1')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Country_Going_Song Details
            app.get('/GoingSDetails',(req,res)=>{
                const result=database.collection('Details').find({Song_name:"Going, Going, Gone"}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

            //Country_Human_360.mp4
            app.get('/HumanVone',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b116250d35b774fd2f0b')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                 //Country_Human_720.mp4
            app.get('/HumanVtwo',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b13006a63bef3f5addf7')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })


            //Country_Human_Audio.m4a
            app.get('/HumanA',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b15208b41b3b1edb6d8f')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Country_Human_Song Details
            app.get('/HumanSDetails',(req,res)=>{
                const result=database.collection('Details').find({Song_name:"Human"}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                 //Kids_Letitgo_360.mp4
            app.get('/LetVone',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b16ff0d153ec8e9a7334')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Kids_Letitgo_720.mp4
            app.get('/LetVtwo',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b18160f667fa7c4eae89')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Kids_Letitgo_Audio.m4a
            app.get('/LetA',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b1986ccfca5f7214a334')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                
                //Kids_Letitgo_Song Details
            app.get('/LetSDetails',(req,res)=>{
                const result=database.collection('Details').find({Song_name:"Let it go"}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })


                //Kids_WhenWillMyLife_360.mp4
            app.get('/WhenVone',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b1b8bda731ba21705b58')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Kids_WhenWillMyLife_720.mp4
            app.get('/WhenVtwo',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b1da2ae2ad550847b297')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Kids_WhenWillMyLife_Audio.m4a
            app.get('/WhenA',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b1f7f12b9a198242a341')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                 //Kids_WhenWillMyLife_Song Details
            app.get('/WhenSDetails',(req,res)=>{
                const result=database.collection('Details').find({Song_name:"When will my life"}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Pop_SeeYouAgain_360.mp4
            app.get('/SeeVone',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b2170b87681c5f7bc1d6')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Pop_SeeYouAgain_720.mp4
            app.get('/SeeVtwo',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b231eac482c165ae1906')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Pop_SeeYouAgain_Audio.m4a
            app.get('/SeeA',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b2513555092525853693')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Kids_SeeYouAgain_Song Details
            app.get('/SeeSDetails',(req,res)=>{
                const result=database.collection('Details').find({Song_name:"See you again"}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                 //Pop_WhatMakesYou_360.mp4
            app.get('/WhatVone',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b26926811e057cd00f85')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                 //Pop_WhatMakesYou_720.mp4
            app.get('/WhatVtwo',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b28058cdf69b16b6c62d')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                //Pop_WhatMakesYou_Audio.m4a
            app.get('/WhatA',(req,res)=>{
                const result=databasetest.collection('fs.chunks').find({files_id:ObjectId('63d7b298ea8719cb2c4c77ac')}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })

                
                //Kids_WhatMakesYou_Song Details
            app.get('/WhatSDetails',(req,res)=>{
                const result=database.collection('Details').find({Song_name:"What makes you beautiful"}).toArray((err,result) =>{
                    if(err) throw err
                    res.send(result)              
                    console.log(result)
                    req.body.Author=result;       
                   
                })   
                })


        //REtrieve all songs
        app.get('/AllSongs',(req,res)=>{
            const result=databasetest.collection('fs.chunks').find({}).toArray((err,result) =>{
                if(err) throw err
                res.send(result)              
                console.log(result)
                   
               
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

    //Listening on port & database connection with mongo client
    server.listen(port, () => {
            console.log(`Server is runing on port ${port}`)
        
            MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true}, (error, result) =>{
            if(error) throw error
            database = result.db('SongDetails')
            databasetest = result.db('test')
            console.log('Connection successful')
        })
    })

    
























































































































































































































































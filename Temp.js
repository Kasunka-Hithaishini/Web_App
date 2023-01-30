/*const express=require('express')
//let path = require("path")
const http= require('http')
const { socket } = require('server/router')
const socketIo= require('socket.io')
const MongoClient=require('mongodb').MongoClient



const app=express()
//let server=http.createServer(app)

app.use(express.json())
var database



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


/*app.get('/api/posts',(req, resp) => {
    database.collection('posts').find({}, {name:true}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)
    })

})*/

/*app.get('/api/post',(req,res)=>{
    const result=database.collection('Details').find({Song_name:"b"}).toArray((err,result) =>{
        if(err) throw err
        res.send(result)              
        console.log(result)
        console.log(f)
       
    })
   
    })*/


    /*app.get('/api/post',(req,res)=>{
        const result=database.fs.chunks.find({}).toArray((err,result) =>{
            if(err) throw err
            res.send(result)              
            console.log(result)
            
           
        })
       
        })

        app.listen(7569, () => {
            MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true}, (error, result) =>{
                if(error) throw error
                database = result.db('test')
                console.log('Connection successful')
            })
        })
    

/*app.listen(7539, () => {
    MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true}, (error, result) =>{
        if(error) throw error
        database = result.db('SongDetails')
        console.log('Connection successful')
    })
})
*/



/*const server=http.Server(app);
server.listen(3002, console.log('Successful'))*/

/*const io= socketIo(server);

io.on("connection", function (socket){
    console.log("A user connected");

    socket.emit("server message", "Hello World");
    
    socket.on("client message", function(msg){
        console.log("Rec'd from client:'"+msg+"' ");
    });
        
    });

    server.listen(9000, () => {console.log("Listening on 9000");});
*/











/*const express = require('express')
const app = express()
const port = 8569




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/
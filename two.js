/*const express=require('express')
const http= require('http')
const { socket } = require('server/router')
const socketIo= require('socket.io')
const MongoClient=require('mongodb').MongoClient


const app=express()

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


app.get('/api/posts',(req, resp) => {
    database.collection('posts').find({}, {name:true}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)
    })

})

app.listen(2850, () => {
    MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true}, (error, result) =>{
        if(error) throw error
        database = result.db('blog')
        console.log('Connection successful')
    })
})

/*const server=http.Server(app);
server.listen(3002, console.log('Successful'))

const io= socketIo(server);

io.on('connection', (socket) =>{
    socket.emit('hello', {
        greeting: 'Hello Kasunka'
    });
});*/











/*const express = require('express')
const app = express()
const port = 8569




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/

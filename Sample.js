const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3002

app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 
app.use(cors())

//You can use this to check if your server is working
app.get('/', (req, res)=>{
    res.send("Hello")
    })

    app.get('/api/Login', (req,res) => {
        res.sendFile('Login.html', {root:'Html'});
    });


    //Route that handles login logic
app.post('/login', (req, res) =>{
    console.log(req.body.username) 
    console.log(req.body.password) 
})

//Route that handles signup logic
app.post('/signup', (req, res) =>{
console.log(req.body.fullname) 
console.log(req.body.username)
console.log(req.body.password) 
})

//Start your server on a specified port
app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
})

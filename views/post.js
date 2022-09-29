const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = 3000

//app.get('/', (req, res) => {
//  res.send('hello')
//})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/post.html')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.post('/', (req, res) => {
  res.send(req.body)
})

app.listen(port, () =>{
  console.log(`start server port ready http://localhost:${port}`)
})
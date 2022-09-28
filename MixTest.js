const http = require('http')
const mysql = require('mysql')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const port = 5959;

const con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'kdt305',
  database : 'test'
})

const element = {
form : 
  `<form action="/", method="POST">
    name <input type="text" name="name"><br>
    title <input type="text" name="title"><br>
    content <input type="text" name="content"><br>
    <input type="submit">
  </form>`
}

const main = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${element.form}
</body>
</html>
`

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type" : "Text"})
  res.write(main);
  res.end
}).listen(port, () => {
  console.log(`server... http://localhost:${port}`)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

app.get('/', (req, res) => {
  res.send(req.body)
})
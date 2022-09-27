const express = require('express')
const mysql = require('mysql')
const app = express();
const port = 5959;
const http = require('http')

const con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'kdt305',
  database : 'test'
})

//function createElementList(list, parent, child){
//  for(let i = 0; i < list.length; i++){
//    let create = document.createElement(child)
//    create.textContent = list[i]
//    parent.appendChild(create)
//  }
//}

//app.get('/', (req, res) => {
//  const sql = "select * from db_test"
//  conn.query(sql, (err, row, field) => {
//    if(err) throw err;
//    res.send(row)
//  })
//})

const settingDOM = () =>{}

const mainPage =
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id = "root">
    <header>
      <h1><a href="http://localhost:8000">글쓰기<a></h1>
    </header>
  </div>
</body>
</html>`

http.createServer((req, res) => {
  res.write(mainPage);
  res.end()
}).listen(port, () => {
  console.log(`server start http://localhost:${port}`)
})
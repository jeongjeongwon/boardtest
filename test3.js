const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

const conn = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'kdt305',
  database : 'test'
})

//app.get('/', (req, res) => {
//  const sql = "select * from db_test"
//  conn.query(sql, (err, row, field) => {
//    if(err) throw err;
//    res.send(row)
//  })
//})

//const sql = 'INSERT INTO db_test(id, title, content) VALUES(?, ?, ?)'
//conn.query(sql, [], (err, row, field) => {
//  if(err) throw err;
//  console.log(row);
//});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.post('/', (req, res) => {
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`server is running on post... http://localhost:${port}`)
});
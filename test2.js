const port = 3000;
const express = require('express')
const mysql = require('mysql')
const app = express();

const conn = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'kdt305',
  database : 'test'
});

conn.connect(function(err){
  if(err) throw err;
  console.log('connect')
  //const sql = "select * from db_test"
  //conn.query(sql, function(err, row, fields){
  //  if(err) throw err;
  //  console.log(row)
  //})
})

app.get('/', function(req, res){
  const sql = "select * from db_test"
  conn.query(sql, function(err, row, fields){
    if(err) throw err;
    response.send(row)
  })
})
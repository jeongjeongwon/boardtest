const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const ejs = require('ejs')
const port = 3000;

const conn = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'kdt305',
  database : 'test'
})

app.get('/', (req, res) => {
  const sql = "select * from db_test"
  conn.query(sql, (err, row, field) => {
    if(err) throw err;
    res.send(row)
  })
})

app.listen(port, () => {
  console.log(`server ready... http://localhost:${port}`)
})
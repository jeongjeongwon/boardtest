const port = 3000

const mysql = require('mysql')

const conn = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'kdt305',
  database : 'test'
});

conn.connect(function(err){
  if(err) throw err;
  console.log('Connect')
})

const sql = "INSERT INTO db_test(id, title, content) VALUES ('정정원','집 가고 싶다','뒹굴거리고 싶다')"

conn.query(sql, function(err, rows, fields){
  if(err) throw err;
  console.log(rows)
})


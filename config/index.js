//* mysql 호출
//* db_info를 통해 데이터 베이스의 정보를 입력하여 mysql에 접속 내부의 database를 호출한다.
let mysql = require('mysql')
let db_info = {
  host: 'localhost',
  post: '3306',
  user: 'root',
  password: 'kdt305',
  database: 'test'
}

module.exports = {
  init: function(){
    return mysql.createConnection(db_info)
  },
  connect: function(conn){
    conn.connect(function(err){
      if(err) console.error('mysql connection error : ' + err);
      else console.log('mysql connect success!')
    })
  }
}
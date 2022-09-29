let express = require('express')
let app = express();
let db_config = require(__dirname + '/config/index.js');
let conn = db_config.init();
let bodyParser = require('body-parser');

db_config.connect(conn);

app.set('views', __dirname+'./views');
app.set('view engin', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', function(req, res){
  res.send('ROOT');
});

app.get('/list', function(req, res){
  var sql = 'SELECT * FROM BOARD';
  conn.quert(sql, function(err, rows, fields){
    if(err) console.log('quert is not excuted. select fail...\n' + err);
    else res.render('list.ejs', {list : rows})
  });
  app.get('/write', function(req, res){
    res.render('write.ejs')
  })
});

app.get('/writeAf', function(req, res){
  let body = req.body;
  console.log(body);

  let sql = 'INSERT INTO BOARD VALUES(?, ?, ?, NOW())';
  let params = [body.number, body.title, body.content, body.img, body.writer, body.day];
  console.log(sql);
  conn.query(sql, params, function(err){
    if(err) console.log('query is not excuted. insert fail...\n' + err);
    else res.redirect('/list');
  })
})

app.listen(3000, () => console.log(`server is running on port 3000... http://localhost:${3000}`))
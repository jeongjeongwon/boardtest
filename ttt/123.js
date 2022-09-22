let express = require('express')
let ejs = require('ejs')
let mysqlRouter = require('./routes/mysql')
let app = express()
let bodyParser = require('body-parser')

app.set ('view engin', 'ejs');
app.set('views', './views/')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let formRouter = require('./routes/from');
let boardRouter = require('./routes/board');
app.use('/form', formRouter);
app.use('/mysql', mysqlRouter);
app.use('/board', boardRouter);

app.listen(5000);
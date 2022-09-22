let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next){
  res.render('form', {
    name : '정원연습',
    blog : '정원이의 연습장',
    homepage : '정원이의 연습 홈그라운드'
  })
})

router.post('/', function(req, res, next){
  res.json(req.body);
})

module.exports = router;
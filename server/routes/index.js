var express = require('express');
var router = express.Router();

//jsonFile
const memos = require('../memodata.json')

/*  get (/) 전체내용출력 */
router.get('/',(req, res, next) => {
  console.log(memos);
  res.send(memos);
})

/*  get (/list/:id) 페이지출력 
params.id와 filter된 memo의 id가 동일하면 true를 출력*/

router.get('/list/:id',(req, res, next) => {
  const id = req.params.id
  console.log(id);
  const filteredMemo = memos.filter(memo => id == memo.id)
  console.log(filteredMemo[0]);
  res.send(filteredMemo[0]);
})

let count = 3;
/* post (/write) form내용 등록*/ 
router.post('/write',(req, res, next) => {
  const item = req.body;
  count++;
  const memo = {
    id : count,
    title : item.title,
    memo : item.memo,
    writer : item.writer
  };
  memos.push(memo);
  res.redirect('/');
})

module.exports = router;

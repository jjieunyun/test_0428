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

let count = memos.length;

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
  //send를 이용해서 응답을 꼭 해줘야한다
  res.redirect('/');
})


/*작성자 검색 화면API
get('/:writer')*/
router.get('/:writer',(req, res, next) => {
  const writer = req.params.writer
  console.log(writer);
  const filteredMemo = memos.filter(memo => writer == memo.writer)
  console.log(filteredMemo)
  res.send(filteredMemo);
})


/* 메모배열 삭제 api : delete ( '/:id' )*/
//id값을 메모의 주소로 받아와서 동일 하다면 삭제해준다.
router.delete('/:id',(req, res, next) => {
  const id = req.params.id
  const index= memos.findIndex(memo => id == memo.id)
  memos.splice(index,1)
  res.send(memos); 
})


/* updateview에서 put을 통해 받아온 값 수정 : put (/update) */ 
router.post('/update',(req, res, next) => {
  const item = req.body;
  const index= memos.findIndex(m => item.id == m.id)
  memos[index] = {
    id : item.id,
    title : item.title,
    memo : item.memo,
    writer : item.writer
  };
  console.log(memos[index])
  res.redirect('/');
})


module.exports = router;

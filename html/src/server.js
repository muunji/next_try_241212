const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

//readfile 함수 만들기
function readPath(readUrl,res) {
  const filePath = path.join(__dirname,readUrl);
  const fileData = fs.readFileSync(filePath,'utf-8');
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  res.write(fileData);
  res.end();
}

//port 변수 설정
const PORT = 3050;

//서버 생성
const server = http.createServer((req,res)=>{

  //GET요청
  if(req.method === "GET"){

    //url = /
    if(req.url === '/'){
      readPath("../public/index.html",res);
    }

    //url = /a
    if(req.url === '/a'){
      readPath("../public/a.html",res);
    }
  }

  //POST 요청
  if(req.method === "POST") {
    
    //url = /form
    if(req.url === '/form'){
      readPath("../public/form.html",res);
    }
  }
})
.listen(PORT,function(){
  console.log(`http://localhost:${PORT}`);
})
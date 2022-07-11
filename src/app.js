
const express = require("express");
const app = express();

const PORT = 3000;

app.set("views", "./views");// 확장성을 위해서 view 파일을 따로 만들어준다. 
app.set("view engine", "ejs"); //view engine을 ejs로 설정해준다. 

const home = require("./routes/home")
app.use("/", home); // use -> 미들 웨어를 등록해주는 메소드
module.exports = app;







///////////////// express를 사용하지 않는다면 ////////////////////
// const http = require("http");
// const app = http.createServer((req, res) => {
//   res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
//   if (req.url === "/") {
//     res.end("여기는 루트입니다!");
//   } else if (req.url === '/login'){
//     res.end("여기는 로그인 화면입니다.");
//   }
// });

// app.listen(3001, ()=> {
//   console.log("http로 가동된 서버입니다.");
// })
///////////////// express를 사용하지 않는다면 ////////////////////

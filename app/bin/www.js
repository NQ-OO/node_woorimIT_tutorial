"use strict"; //es의 규정의 준수하겠다는 의미 

const app = require("../app"); //변수 명이 같으면, 같은 exports 값을 가져온다. 신문법이라고 한다. 
const PORT = 3000;

app.listen(PORT, ()=>{
  console.log("서버가동");
})


 
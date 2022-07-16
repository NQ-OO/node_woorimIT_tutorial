"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// var scissors = require('scissors');

//라우팅
const PORT = 3000;

//앱 세팅
app.set("views", "./src/views");// 확장성을 위해서 view 파일을 따로 만들어준다. 
app.set("view engine", "ejs"); //view engine을 ejs로 설정해준다. 
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 무넺 해결
app.use(bodyParser.urlencoded({extended: true}));


const home = require("./src/routes/home")
app.use("/", home); // use -> 미들 웨어를 등록해주는 메소드
module.exports = app;


/////////// split.pdf.js
// const fs = require('fs');
// const path = require('path');
// const { PDFDocument } = require('pdf-lib');

// const splitPDF = async (pdfFilePath, outputDirectory) => {
//   const data = await fs.promises.readFile(pdfFilePath);
//   const readPdf = await PDFDocument.load(data);
//   const { length } = readPdf.getPages();

//   for (let i = 0, n = length; i < n; i += 1) {
//     const writePdf = await PDFDocument.create();
//     const [page] = await writePdf.copyPages(readPdf, [i]);
//     writePdf.addPage(page);
//     const bytes = await writePdf.save();
//     const outputPath = path.join(outputDirectory, `Invoice_Page_${i + 1}.pdf`);
//     await fs.promises.writeFile(outputPath, bytes);
//     console.log(`Added ${outputPath}`);
//   }
// };

// splitPDF('pdf_practice_2.pdf', './pdf_single_pages').then(() =>
//   console.log('All invoices have been split!')
// );
/////////// split.pdf.js




 



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

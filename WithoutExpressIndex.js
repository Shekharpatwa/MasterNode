// const lib = require('./lib.js');
// // import {sum,diff} from  './lib.js';

// // console.log(lib.sum(8,9),lib.diff(10,7));
// // const t1 = performance.now();

// const fs = require('fs');

// // // const txt = fs.readFileSync('demo.txt','utf-8');
// // fs.readFile('demo.txt','utf-8',(err,txt)=>{
// //     console.log(txt);
// // });
// // const t2 = performance.now();
// // console.log(t2-t1);

// // console.log(sum(5,6), diff(9,3));`
// console.log("hello")
// const express = require('express');
// const server = express();
// server.listen(8000);
const http = require("http");
const fs = require('fs');

const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const data1 = data.products[0];

const server = http.createServer((req, res) => {
  console.log("Connected");
  switch(req.url){
    case "/":
        res.setHeader("Content-Type","text/html");
        res.end(index);
        break;
    case "/Home":
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(data));
        break;
    case "/ChangeMain":
        res.setHeader("Content-Type","text/html");
        const changedIndex = index.replace("**title**",data1.title).replace("**Name**",data1.description).replace("**Pro**",data1.brand);
        res.end(changedIndex);
        break;
    default:
        res.setHeader("Content-Type","text/html");
        const changedIndex1 = index.replace("**title**","Good");
        res.end(changedIndex1);
        break;
  }
//   res.setHeader("Content-Type","text/html");
//   res.setHeader("Content-Type","application/json");
//   res.end(index);
});

server.listen(8000);

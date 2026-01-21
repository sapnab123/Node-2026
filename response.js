const http=require('http');
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.end("<h1>this is sapna garg</h1>");

}).listen(4800);
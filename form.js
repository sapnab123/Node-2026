const http=require('http');
http.createServer((req,resp)=>{
    resp.write(`<form></form>`);
    resp.end();
}).listen(3200);
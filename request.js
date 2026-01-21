const http=require('http');
http.createServer((req,resp)=>{
    console.log(req.url);
    resp.write('<h1>hello </h1>')
resp.end("hello"); 
}).listen(5000);

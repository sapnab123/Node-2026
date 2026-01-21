const http=require('http');
const userData=[
    {
        name:'sapna',
        age:'20',
        email:'sapnabindal20@gmail.com'

    },
    {
        name:'sapna1',
        age:'30',
        email:'sapnabindal201@gmail.com'

    },
        {
        name:'sapna2',
        age:'40',
        email:'sapnabindal202@gmail.com'

    },
]
http.createServer((req,resp)=>{
    resp.setHeader('Content-Type','application/json');
    resp.write(JSON.stringify(userData));
    resp.end();

}).listen(6
    000);
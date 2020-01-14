const http = require('http');
// const fs = require('fs');
const url = require('url');


function req(request,response){


    const base = url.parse(request.url);
    const pathname = base.pathname;


    console.log(pathname + ' recieved');
   response.writeHead(200,{
       'Content-Type':'text/html'
   });
   response.write('Welcome');
   response.end();




}


http.createServer(req).listen(8080);

console.log('Server starting');
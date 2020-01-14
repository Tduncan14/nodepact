const http = require('http');


http.createServer(function(request,response){


    response.writeHead(200,{'Content-Type':'text/plain'})
    response.write('Treek')
    response.end('Hello World')
}).listen(8080);


// const express = require('express');

// const App = express();

// const PORT =  process.env.PORT || 8000;


// App.listen(PORT,() =>{
//     console.log('keep moving forward')
// })
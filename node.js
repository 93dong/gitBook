const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(){}).listen(8888,function(){
    console.log('监听：8888');
});
server.on('request', function (request, response) {
    const url = path.resolve(request.url);
    response.writeHead(200, {});
    fs.readFile(`/Users/miao/self/gitBook/_book${url}`, 'utf-8', function (err, data) {
        console.log(url);
        if (err) {
            console.log(err);
            console.log(request.url);
        }
        response.end(data);

    });
});



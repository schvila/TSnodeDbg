//const http = require('http');
import http, { IncomingMessage, ServerResponse}   from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log(req.method, req.url);
});
let i:number;
i = 5;

console.log(i, 'Listen on port 8080.');
server.listen(8080);
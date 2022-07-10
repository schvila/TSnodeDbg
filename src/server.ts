//const http = require('http');
import http, { IncomingMessage, ServerResponse}   from 'http';
import mongoose from "mongoose";

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log(req.method, req.url);
});
let i:number;
i = 5;

mongoose
  .connect(
    "mongodb://localhost:27017/messages?retryWrites=true&w=majority"
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
  )
  .then((result) => {
    console.log("Mongoose connect localhost:27017 NodeJS listen on port 8080.");
    server.listen(8080);
  })
  .catch((err) => console.log(err));

const http = require('http');
const routes = require('./routes');
// const { buffer } = require('stream/consumers');
console.log(routes.text);

const server = http.createServer(routes.handler);

server.listen(3000);

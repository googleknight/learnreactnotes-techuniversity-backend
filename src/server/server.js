const Routes = require('../routes');
const hapi = require('hapi');

const server = new hapi.Server();

server.connection({
  port: 8080,
  host: 'localhost',
});

server.route(Routes);
server.start(() => {
  console.log('Server started at port 8080');
});
module.exports = server;

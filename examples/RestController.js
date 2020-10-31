const Server = require('@skuyjs/http-server');
const { RestController } = require('../dist');
const server = new Server();

class IndexController extends RestController {
  get(req) {
    return {
      'message': 'welcome',
    };
  }
}

server.use('/', new IndexController().build());

server.listen(8080);

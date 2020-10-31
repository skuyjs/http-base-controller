import Router from '@skuyjs/http-server/dist/lib/router';
import { Req } from '@skuyjs/http-server/dist/lib/typings/req';
import { Res } from '@skuyjs/http-server/dist/lib/typings/res';
import Controller from './types/Controller';

class BaseController implements Controller {
  router: Router;

  constructor() {
    this.router = new Router();
  }

  notFound(req: Req, res: Res) {
    res.status(404).send(`${req.method} ${req.url} 404 Not Found`);
  }

  notFoundJSON(req: Req, res: Res) {
    res.status(404).json({
      error: `${req.method} ${req.url} 404 Not Found`,
    });
  }

  build() {
    return this.router;
  }
}

export default BaseController;

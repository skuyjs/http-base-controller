import Router from '@skuyjs/http-server/dist/lib/router';
import { Req } from '@skuyjs/http-server/dist/lib/typings/req';
import { Res } from '@skuyjs/http-server/dist/lib/typings/res';
import BaseController from './BaseController';

export class RestController extends BaseController {
  get(req: Req, res: Res): void { this.notFoundJSON(req, res); }
  post(req: Req, res: Res): void { this.notFoundJSON(req, res); }
  put(req: Req, res: Res): void { this.notFoundJSON(req, res); }
  patch(req: Req, res: Res): void { this.notFoundJSON(req, res); }
  delete(req: Req, res: Res): void { this.notFoundJSON(req, res); }

  private parseHandler(handler: Function) {
    return async (req: Req, _: Res) => {
      req.body = JSON.stringify({
        responseData: await handler(req),
      });
    }
  }

  private parseResponse(req: Req, res: Res) {
    const body: any = JSON.parse(req.body.toString());
    res.json(body.responseData);
  }

  build(): Router {
    this.router.get('', this.parseHandler(this.get), this.parseResponse);
    this.router.post('', this.parseHandler(this.post), this.parseResponse);
    this.router.put('', this.parseHandler(this.put), this.parseResponse);
    this.router.patch('', this.parseHandler(this.patch), this.parseResponse);
    this.router.delete('', this.parseHandler(this.delete), this.parseResponse);

    return this.router;
  }
}

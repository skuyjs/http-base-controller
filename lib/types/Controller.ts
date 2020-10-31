import Router from '@skuyjs/http-server/dist/lib/router';

interface Controller {
  build(): Router;
}

export default Controller;

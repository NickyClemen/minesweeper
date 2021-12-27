import {
  Application,
  Router,
  Request,
  Response,
  NextFunction
} from 'express';

function handler(app:Application) {
  const router:Router = Router();

  app.use('/api');

  router.post('/new-game', (req:Request, res:Response, next:NextFunction) => {
    const { params = '' } = req;
  });

  router.get('/new-game/:id', (req:Request, res:Response, next:NextFunction) => {
    const { params } = req;
  });
}

export default handler;
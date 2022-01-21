import validateParamsMiddleware from '@middlewares/validateParamsMiddleware';
import Server from '@namespaces/Server.namespace';

import {
  Application,
  Router,
  Request,
  Response,
  NextFunction
} from 'express';

function handler(app:Application) {
  const router: Router = Router();

  app.use('/api', router);

  router.post('/new-game', validateParamsMiddleware, (req: Request<Server.Params, unknown, unknown, unknown>, res: Response, next: NextFunction) => {
    const { params: { id } }: Request<Server.Params, unknown, unknown, unknown> = req;
  });

  router.get('/new-game/:id', validateParamsMiddleware, (req: Request<Server.Params, unknown, unknown, unknown>, res: Response, next: NextFunction) => {
    const { params: { id } }: Request<Server.Params, unknown, unknown, unknown> = req;

    switch(params) {
      case Object.keys(params).length === 0: {
        const newGame = new Game();

        res.status(200).json({ newGame });
      }

      case params.hasOwnProperty('id'): {
        const { id } = params;

        if(isGameExist(id)) {
          const fetchGame = _;

          res.status(200).json({ fetchGame });
        } else {
          res.status(404).json({ newGame: false, msg: 'La partida no ha sifo encontrada.' })
        }
      }
    }
  });
}

export default handler;
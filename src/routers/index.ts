import Server from './../types/namespaces/Server.namespace';

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
    const { params = {} } = req;
  });

  router.get('/new-game/:id', (req:Request, res:Response, next:NextFunction) => {
    const { params = {} } = req;

    switch(params) {
      case Object.keys(params) === 0: {
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
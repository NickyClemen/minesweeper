import { Request, Response, NextFunction } from 'express';

import Server from '@namespaces/Server.namespace';

export default function setHeadersMiddleware(
  req: Request<Server.Params, unknown, unknown, unknown>,
  res: Response,
  next: NextFunction,
) {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');

  next();
}
import { Request, Response, NextFunction } from 'express';

import Server from '@namespaces/Server.namespace';

import debug from "@debug";

export default function errorHandler(
  err: Error,
  req: Request<Server.Params, unknown, unknown, unknown>,
  res: Response,
  next: NextFunction,
) {
  debug(`[debug]`, 'init');
  debug(`[errorHandler:req]`, JSON.stringify(err));

  const { name, message } = err;

  res.status(500).json({ name, message });
}
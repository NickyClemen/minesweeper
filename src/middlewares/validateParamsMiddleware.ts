import { Request, Response, NextFunction,  } from 'express';

import debug from '@debug'

import Server from '@namespaces/Server.namespace';

import { ParamsSchema } from '@schemas';

export default async function validateParamsMiddleware(req: Request<Server.Params, unknown, unknown, unknown>, res: Response, next: NextFunction) {
  debug('[validateParamsMiddleware]', 'init');

  try {
    const { params }: Request<Server.Params, unknown, unknown, unknown> = req;
    debug('[validateParamsMiddleware]', JSON.stringify(params));

    const validateParams = await ParamsSchema.validateAsync(params);

    if (validateParams) {
      next();
    }
  } catch (err: unknown) {
    const error = err as Error;
    debug('[validateParamsMiddleware]', JSON.stringify(error));

    next(error);
  }
}


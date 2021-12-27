import { Request, Response, NextFunction,  } from 'express';
import Joi from 'joi';

export default function validateParamsMiddleware(req:Request, res:Response, next:NextFunction) {
  const { params = {} } = req;
  const schema = Joi.object().keys({
    id: Joi.string().guid({ version: 'uuidv4' }).required()
  });

  const { error: isNotValid } = schema.validate(params);

  if(isNotValid) {
    res.status(422).json({
      msg: 'Invalid id request.'
    });

    next();
  }

  next();
}


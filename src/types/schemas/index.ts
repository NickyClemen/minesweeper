import Joi from 'joi';

export const ParamsSchema = Joi.object({
  id: Joi.string().guid({ version: 'uuidv4' }).required(),
});
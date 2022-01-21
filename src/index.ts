import express, { Application } from 'express';

import morgan from 'morgan';

import errorHandler from '@middlewares/errorHandler';
import setHeadersMiddleware from '@middlewares/setHeadersHandler';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use(setHeadersMiddleware);
app.use(errorHandler);
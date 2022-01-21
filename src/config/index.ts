import { join } from 'path';

import dotenv from 'dotenv';

const ENV_FILE = join(__dirname, './.env');
dotenv.config({ path: ENV_FILE });

import IConfig from '@interfaces/IConfig.interface';

export default class Config implements IConfig {
  public readonly port: number;

  constructor() {
    this.port = Number(process.env.PORT);
  }
}
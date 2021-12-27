// import Box from './Box';

import { createRandomUUID } from '../utils';
import ITable from '../types/interfaces/Table.interface';

export default class Table {
  private id:string;
  private columns:number;
  private rows:number;
  // private box:Box;

  constructor({ columns, rows }:ITable) {
    this.id = createRandomUUID();
    this.columns = columns;
    this.rows = rows;
    // this.box = box;
  }

  createTable() {}
}
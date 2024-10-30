/// <reference path="./crud.d.ts" />;
import { rowID, rowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {...row, age, 25};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
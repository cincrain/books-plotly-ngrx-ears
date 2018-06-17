import { SimpleChange } from '@angular/core';


export const isNewChange = (prop: SimpleChange) => {
  return prop.currentValue !== prop.previousValue;
};
//e const


export const toPayload = (action: any) => action.payload;
//e const

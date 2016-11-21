import { Injectable } from '@angular/core';
import {StoreService} from "../store.service";

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

@Injectable()
export class ListActionsService {

  constructor(private store:StoreService) {}

  public addItem(title:string){
    this.store.dispatch({
      type:ADD_ITEM,
      payload: {title}
    })
  }

  public removeItem(item){
    this.store.dispatch({
      type:REMOVE_ITEM,
      payload: item
    })
  }

}

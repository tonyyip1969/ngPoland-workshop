import { Injectable } from '@angular/core';
import {StoreService} from "../store.service";

export const ADD_ITEM = 'ADD_ITEM';

@Injectable()
export class ListActionsService {

  constructor(private store:StoreService) {}

  public addItem(title:string){
    this.store.dispatch({
      type:ADD_ITEM,
      payload: {title}
    })
  }

}

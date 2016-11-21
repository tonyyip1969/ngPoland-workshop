import { Injectable } from '@angular/core';
import {createStore} from "redux";
import {listReducer} from "./reducers/list.reducer";

@Injectable()
export class StoreService {

  private _store: any;

  constructor() {
    this._store = createStore( listReducer);
  }

  get state(){
    return this._store.getState();
  }

  public dispatch(action){
    this._store.dispatch(action);
  }
}

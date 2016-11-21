import { Injectable } from '@angular/core';
import {createStore} from "redux";

@Injectable()
export class StoreService {

  private _store: any;

  constructor() {
    this._store = createStore( state => state );
  }

  get state(){
    return this._store.getState();
  }

  public dispatch(action){
    this._store.dispatch(action);
  }
}

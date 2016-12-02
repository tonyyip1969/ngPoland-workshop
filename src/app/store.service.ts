import { Injectable } from '@angular/core';
import { createStore } from 'redux';

@Injectable()
export class StoreService {

  private store;

  constructor() {
    this.store = createStore(state => state);
  }

  public getState(){
    return this.store.getState();
  }

  public dispatch(action){
     this.store.dispatch(action); 
  }

}

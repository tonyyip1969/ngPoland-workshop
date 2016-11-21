import { Injectable } from '@angular/core';
import {createStore, combineReducers, compose} from "redux";
import {listReducer} from "./reducers/list.reducer";
import {userReducer} from "./reducers/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  list: listReducer
});

@Injectable()
export class StoreService {

  private _store: any;

  constructor() {
    this._store = createStore(
        rootReducer,
        compose(window.devToolsExtension  && window.devToolsExtension() )
    );
  }

  get state(){
    return this._store.getState();
  }

  public dispatch(action){
    this._store.dispatch(action);
  }
}

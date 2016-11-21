
import {LOGIN, LOGIN_SUCCESS} from "../actions/user-actions.service";

export const auth = store => next => action => {

  if(action.type === LOGIN) {
    setTimeout( () => {
    next({
        type: LOGIN_SUCCESS,
        payload: {name: 'nir'}
      })
    }, 5000);
  }

  next(action);
};
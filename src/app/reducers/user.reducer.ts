import {LOGOUT, LOGIN_SUCCESS, LOGIN} from "../actions/user-actions.service"

const initState = {
  pending: false,
  user: {}
};

export function userReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {pending: true});
    case LOGOUT:
      return {};
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {pending: false, user: action.payload});

    default:
      return state;
  }
}
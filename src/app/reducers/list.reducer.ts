import {ADD_ITEM, REMOVE_ITEM} from "../actions/list-actions.service";

export function listReducer(state = [], action) {

  switch (action.type) {

    case ADD_ITEM:
      return [...state, action.payload];

    case REMOVE_ITEM:
      const index = state.indexOf(action.payload);
      return state.slice(0 ,index).concat(state.slice(index + 1));

    default:
      return state;
  }


}
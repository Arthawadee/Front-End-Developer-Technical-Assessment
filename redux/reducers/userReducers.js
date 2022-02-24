import * as types from "../actions/types";

const initialState = [];

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_USER:
      return [...state, payload];
    case types.DELETE_USER:
      return state.filter((i) => i.id !== payload.id);
    default:
      return state;
  }
};
export default userReducer;

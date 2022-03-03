import { initialState } from "../store";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../action";

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        jobs: [
          ...state.jobs.slice(0, action.payload),
          ...state.jobs.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};

export default cartReducer;

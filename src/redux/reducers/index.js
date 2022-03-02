import { initialState } from "../store";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../action";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          jobs: [...state.cart.jobs, action.payload],
        },
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          jobs: [
            ...state.cart.jobs.slice(0, action.payload),
            ...state.cart.jobs.slice(action.payload + 1),
          ],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;

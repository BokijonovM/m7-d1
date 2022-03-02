export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_ERROR = "SET_ERROR";

export const addToCartAction = (jobToAdd) => ({
  type: ADD_TO_CART,
  payload: jobToAdd,
});

export const removeFromCartAction = (indexToRemove) => ({
  type: REMOVE_FROM_CART,
  payload: indexToRemove,
});

export const setErrorAction = () => ({
  type: SET_ERROR,
  payload: "404",
});

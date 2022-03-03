import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import cartReducer from "../reducers/index";
import thunk from "redux-thunk";
import jobReducer from "../reducers/jobReducer";

const aComposeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  cart: {
    jobs: [],
  },
  job: {
    stock: [],
    isError: false,
    isLoading: true,
  },
};

const bigReducer = combineReducers({
  cart: cartReducer,
  job: jobReducer,
});

export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import cartReducer from "../reducers/index";
import jobReducer from "../reducers/jobReducer";
import thunk from "redux-thunk";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

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

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_PERSIST_KEY,
    }),
  ],
};

const bigReducer = combineReducers({
  cart: cartReducer,
  job: jobReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const configureStore = createStore(
  persistedReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);

const persistor = persistStore(configureStore);

export { configureStore, persistor };

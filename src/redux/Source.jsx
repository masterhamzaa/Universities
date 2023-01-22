import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Countries from "./Countries"; //reducer country
import Universities from "./Universities"; //reduser Universities

const reducer = combineReducers({
  c: Countries,
  u: Universities,
});

const store = configureStore({ reducer ,middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
})});

export default store;

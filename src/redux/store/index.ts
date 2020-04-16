import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";

const rootReducer = combineReducers({
  counter: counterSlice.reducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
export type AppState = ReturnType<typeof rootReducer>;

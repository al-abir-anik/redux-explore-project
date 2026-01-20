import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

const reduxStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default reduxStore;

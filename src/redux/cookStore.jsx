import { configureStore } from "@reduxjs/toolkit";
import cookReducer from "./cookSlice/cookSlice";

export const store = configureStore({
  reducer: {
    cook: cookReducer,
  },
});

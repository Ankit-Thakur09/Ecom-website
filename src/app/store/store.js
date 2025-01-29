import { configureStore } from "@reduxjs/toolkit";
import storeDataReducer from "./reducer/StoreDataReducer"; // ✅ Import the reducer, not the slice

export const store = configureStore({
  reducer: {
    storeData: storeDataReducer,
  },
});

export default store;

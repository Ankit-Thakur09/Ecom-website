import { configureStore } from "@reduxjs/toolkit";
import storeDataReducer from "./reducer/StoreDataReducer";
import dataReducer from "./reducer/DataSlice";

export const store = configureStore({
  reducer: {
    storeData: storeDataReducer,
    data: dataReducer,
  },
});

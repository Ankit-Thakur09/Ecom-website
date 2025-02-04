"use client"; 

import { Provider } from "react-redux";
import { store } from "./store";
import DataFetcher from "../store/DataFetcher";

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <DataFetcher />
      {children}
    </Provider>
  );
}

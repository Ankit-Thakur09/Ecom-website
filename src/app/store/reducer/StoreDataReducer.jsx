import { createSlice } from "@reduxjs/toolkit";

export const storeDataSlice = createSlice({
  name: "storeData",
  initialState: {
    category: "",
    allData: [], 
  },
  reducers: {
    allStoreData(state, action) {
      if (!action.payload) {
        console.error("Redux action payload is undefined!");
        return;
      }

      const categories = Object.keys(action.payload);
      // console.log("Categories in Redux:", categories);
      console.log("Full Data:", action.payload);
      // const details = action.payload;
     state.category = categories;
      // state.allData.push({
      //   categories: categories, 
      //   details: action.payload, 
      // });
      // state.allData = details;
      // console.log("Full Data:", details);
    },
  },
});

export const { allStoreData } = storeDataSlice.actions;
export default storeDataSlice.reducer;

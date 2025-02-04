import { createSlice } from "@reduxjs/toolkit";

export const storeDataSlice = createSlice({
  name: "storeData",
  initialState: {
    allData: {}, // Stores full data
    categories: [], // Stores category objects
    subcategories: [], // Stores subcategory objects
    items: [], // Stores individual items
  },
  reducers: {
    allStoreData(state, action) {
      if (!action.payload) {
        console.error("Redux action payload is undefined!");
        return;
      }

      state.allData = action.payload; // Store full data

      // Extract categories
      state.categories = action.payload.categories || [];

      // Extract subcategories from all categories
      state.subcategories = state.categories.flatMap(
        (category) => category.subcategories || []
      );

      // Extract items from all subcategories
      state.items = state.subcategories.flatMap(
        (subcategory) => subcategory.fashionType?.items || []
      );

      console.log("Data Stored in Redux:", {
        categories: state.categories,
        subcategories: state.subcategories,
        items: state.items,
      });
    },
  },
});

export const { allStoreData } = storeDataSlice.actions;
export default storeDataSlice.reducer;

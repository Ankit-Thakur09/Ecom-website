import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    categories: [], // Stores category objects
    subcategories: [], // Stores subcategory objects
    items: [], // Stores individual items
  },
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload || [];
    },
    setSubcategories(state, action) {
      state.subcategories = action.payload || [];
    },
    setItems(state, action) {
      state.items = action.payload || [];
    },
  },
});

// Export actions & reducer
export const { setCategories, setSubcategories, setItems } = dataSlice.actions;
export default dataSlice.reducer;

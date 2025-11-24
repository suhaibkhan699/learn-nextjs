import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock async thunk
export const addItemAsync = createAsyncThunk(
  "cart/addItemAsync",
  async (item) => {
    // simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // return the item once "API" resolves
    return item;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItemAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.items.push(action?.payload);
        state.loading = false;
      })
      .addCase(addItemAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

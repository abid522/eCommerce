import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  title: "",
  imageUrl: "",
  description: "",
  price: "",
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: {
      prepare(id, title, imageUrl, description, price) {
        return {
          payload: { id, title, imageUrl, description, price },
        };
      },

      reducer(state, action) {
        state.id = action.payload.id;
        state.title = action.payload.title;
        state.imageUrl = action.payload.imageUrl;
        state.description = action.payload.description;
        state.price = action.payload.price;
      },
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;

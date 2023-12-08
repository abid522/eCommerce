import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  title: "",
  imageUrl: "",
  description: "",
  price: "",
  products: [],
  isLoading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async function () {
    //here we can make the API calls
    const res = await fetch(
      `https://my-json-server.typicode.com/abid522/ecommerce-products/products`
    );
    const data = await res.json();

    return data;
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;

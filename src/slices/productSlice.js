import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
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
      prepare(id, title, imgUrl, description, price) {
        return {
          payload: { id, title, imgUrl, description, price },
        };
      },

      reducer(state, action) {
        const newProduct = {
          id: action.payload.id,
          title: action.payload.title,
          imgUrl: action.payload.imgUrl,
          description: action.payload.description,
          price: action.payload.price,
        };

        state.products.unshift(newProduct);
      },
    },
    updateProductDescription: {
      prepare(description, id) {
        return {
          payload: { description, id },
        };
      },

      reducer(state, action) {
        //first we need to select the desired product from the array
        const selectedProduct = state.products.find(
          (p) => p.id === action.payload.id
        );
        const selectedProductIndex = state.products.findIndex(
          (p) => p.id === action.payload.id
        );
        const updatedProduct = {
          ...selectedProduct,
          description: action.payload.description,
        };
        state.products.splice(selectedProductIndex, 1, updatedProduct);
      },
    },
    updateProductPrice: {
      prepare(price, id) {
        return {
          payload: { price, id },
        };
      },

      reducer(state, action) {
        //first we need to select the desired product from the array
        const selectedProduct = state.products.find(
          (p) => p.id === action.payload.id
        );
        const selectedProductIndex = state.products.findIndex(
          (p) => p.id === action.payload.id
        );
        const updatedProduct = {
          ...selectedProduct,
          price: action.payload.price,
        };
        state.products.splice(selectedProductIndex, 1, updatedProduct);
      },
    },
    deleteProduct(state, action) {
      const selectedProductIndex = state.products.findIndex(
        (p) => p.id === action.payload
      );

      state.products.splice(selectedProductIndex, 1);
    },
    addToCart: {
      prepare(title, price) {
        return {
          payload: { title, price },
        };
      },

      reducer(state, action) {
        const cartItem = {
          title: action.payload.title,
          price: action.payload.price,
        };

        state.cart.push(cartItem);
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

export const {
  addProduct,
  updateProductDescription,
  updateProductPrice,
  deleteProduct,
  addToCart,
} = productSlice.actions;
export default productSlice.reducer;

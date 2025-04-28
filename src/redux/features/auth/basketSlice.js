import { createSlice } from "@reduxjs/toolkit";

const basketSlice=createSlice({
    name: 'basket',
    initialState: {
      basketItems: [],
},
reducers: {
    addToBasket: (state, action) => {
      const product = action.payload;
      if (!state.basketItems.some((item) => item.id === product.id)) {
        state.basketItems.push(product);
      }
    },
    removeFromBasket: (state, action) => {
      const productId = action.payload;
      state.basketItems = state.basketItems.filter(item => item.id !== productId);
    },
  },

})

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const basketSlice=createSlice({
//     name: 'basket',
//     initialState: {
//       basketItems: [],
// },
// reducers: {
//     addToBasket: (state, action) => {
//       const product = action.payload;
//       if (!state.basketItems.some((item) => item.id === product.id)) {
//         state.basketItems.push(product);
//       }
//     },
//     removeFromBasket: (state, action) => {
//       const productId = action.payload;
//       state.basketItems = state.basketItems.filter(item => item.id !== productId);
//     },
//   },

// })

// export const { addToBasket, removeFromBasket } = basketSlice.actions;
// export default basketSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // hər bir item -> { id, title, price, discount_price, is_discount, quantity }
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }

      basketSlice.caseReducers.calculateTotal(state);
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
      }

      basketSlice.caseReducers.calculateTotal(state);
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }

      basketSlice.caseReducers.calculateTotal(state);
    },

    removeFromBasket: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      basketSlice.caseReducers.calculateTotal(state);
    },

    calculateTotal: (state) => {
      state.totalPrice = state.items.reduce((sum, item) => {
        const price = item.is_discount ? item.discount_price : item.price;
        return sum + price * item.quantity;
      }, 0);
    },

    clearBasket: (state) => {
      state.items = [];
      state.totalPrice = 0;
    }
  },
});

export const {
  addToBasket,
  increaseQuantity,
  decreaseQuantity,
  removeFromBasket,
  clearBasket
} = basketSlice.actions;

export default basketSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/features/auth/productSlice";
import authReducer from "../redux/features/auth/authSlice";
import basketReducer from "../redux/features/auth/basketSlice"
import wishlistReducer from "../redux/features/auth/wishlistSice"


export const store=configureStore({
    reducer:{
        product:productReducer,
        auth:authReducer,
        basket:basketReducer,
        wishlist:wishlistReducer,
    }
})
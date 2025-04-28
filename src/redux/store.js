import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/features/auth/productSlice";
import authReducer from "../redux/features/auth/authSlice"


export const store=configureStore({
    reducer:{
        product:productReducer,
        auth:authReducer
    }
})
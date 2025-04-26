import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/features/auth/productSlice"


export const store=configureStore({
    reducer:{
        product:productReducer
    }
})
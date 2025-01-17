import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/cartReducer"

export const store = configureStore({
    reducer: {
        products: productReducer
    }
})
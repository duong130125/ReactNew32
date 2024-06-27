import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductsCart } from "../../interface";
import axios from "axios";

const products: ProductsCart[] = []

// hàm lấy tất cả user
export const getProduct: any = createAsyncThunk(
    "products/getAllProduct",
    async () => {
        const response = await axios.get("http://localhost:8080/products");  
        return response.data;
    }
);

const productReducer = createSlice({
    name: "products",
    initialState: {
        products: products,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // trạng thái chờ lấy dữ liệu
            .addCase(getProduct.pending, (state, action) => {})
            // trạng thái lấy dữ liệu thành công
            .addCase(getProduct.fulfilled, (state: any, action: any) => {
                state.products = action.payload
            })
            // trạng thái lấy dữ liệu thất bại
            .addCase(getProduct.rejected, (state, action) => {})
    },
})

export default productReducer.reducer;
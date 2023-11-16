import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { create } from "domain";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
    products: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
            state.products = action.payload;
        })
    }
})

export const fetchProductsAsync = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        return data.products;
    }
)

export default productSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"products",
    initialState:{
        books:[]
    },
    reducers:{
        fetchProducts:(state,action)=>{
            state.books = action.payload;
        }
    }
});

export const {fetchProducts} = productSlice.actions;

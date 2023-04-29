import { createSlice } from "@reduxjs/toolkit";
import { ShoppingProductType } from "../model/ShoppingProductType";
const initialState:{shopping: ShoppingProductType[]} = {
    shopping: []
}
const shopingSlice = createSlice({
    initialState,
    name: "ShoppingState",
    reducers:{
        setShopping: (state, data) => {
            state.shopping = data.payload;
        },
        resetShopping: (state) => {
            state.shopping = initialState.shopping;
        }
    }
})
export const shoppingActions = shopingSlice.actions;
export const shoppingReducer = shopingSlice.reducer;

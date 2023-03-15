import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { authentificationReducer } from "./authentificationSlice";
export const store: any = configureStore({
    reducer: {
        count: counterReducer,
        login: authentificationReducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { authentificationReducer } from "./authentificationSlice";
import { authReducer } from "./authSlice";
export const store: any = configureStore({
    reducer: {
        count: counterReducer,
        auth: authReducer,
 //       login: authentificationReducer
    }
})
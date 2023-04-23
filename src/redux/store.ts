import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { codeReducer } from "./codeSlice";
import { productsReducer } from "./productsSlice";
export const store: any = configureStore({
    reducer: {
       auth: authReducer,
       codeState: codeReducer,
       productsState: productsReducer
    }
})
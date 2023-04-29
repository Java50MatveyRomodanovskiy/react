import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { codeReducer } from "./codeSlice";
import { productsReducer } from "./productsSlice";
import { shoppingReducer } from "./shoppingSlice";
export const store: any = configureStore({
    reducer: {
       auth: authReducer,
       codeState: codeReducer,
       productsState: productsReducer,
       shoppingState: shoppingReducer
    }
})
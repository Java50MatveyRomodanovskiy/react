import { createSlice } from "@reduxjs/toolkit";
const initialState:{userName:string} = {
    userName: ''
}
const authentificationSlice = createSlice({
initialState,
name: "login",
reducers: {
    login: (state, data) => {
        state.userName = data.payload;

    },
    logout: (state) => {
        state.userName = initialState.userName
    },
}
});
export const authentificationActions = authentificationSlice.actions;
export const authentificationReducer = authentificationSlice.reducer;
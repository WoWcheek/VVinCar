import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        searchOption: "Number"
    },
    reducers: {
        setSearchOption: (state, action) => ({
            ...state,
            ...action.payload
        })
    }
});

export const { setSearchOption } = appSlice.actions;

export default appSlice.reducer;

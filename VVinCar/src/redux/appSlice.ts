import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        searchOption: "Number",
        cars: []
    },
    reducers: {
        setSearchOption: (state, action) => ({
            ...state,
            ...action.payload
        }),
        setCars: (state, action) => ({
            ...state,
            ...action.payload
        })
    }
});

export const { setSearchOption, setCars } = appSlice.actions;

export default appSlice.reducer;

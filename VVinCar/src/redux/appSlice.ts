import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchOption: "Number",
    cars: [],
    fuels: [],
    regions: []
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setSearchOption: (state, action) => ({
            ...state,
            ...action.payload
        }),
        setCars: (state, action) => ({
            ...state,
            ...action.payload
        }),
        setRegionsAndFuels: (state, action) => ({
            ...state,
            ...action.payload
        })
    }
});

export const { setCars, setSearchOption, setRegionsAndFuels } =
    appSlice.actions;

export default appSlice.reducer;

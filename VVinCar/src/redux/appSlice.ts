import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchOption: "Number",
    cars: [],
    fuels: [],
    regions: [],
    compare: []
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
        }),
        addToCompare: (state, action) => ({
            ...state,
            compare:
                state.compare.length == 2
                    ? [state.compare[1], action.payload]
                    : [...state.compare, action.payload]
        }),
        removeFromCompare: (state, action) => ({
            ...state,
            compare: state.compare.filter(x => x !== action.payload)
        }),
        clearCompare: state => ({
            ...state,
            compare: []
        })
    }
});

export const {
    setCars,
    addToCompare,
    clearCompare,
    setSearchOption,
    removeFromCompare,
    setRegionsAndFuels
} = appSlice.actions;

export default appSlice.reducer;

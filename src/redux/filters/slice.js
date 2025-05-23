import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    brand: '',
    price: '',
    mileageFrom: null,
    mileageTo: null
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters: (state, action) => ({...state, ...action.payload}),
        resetFilters: () => initialState
    }
});

export const {setFilters, resetFilters} = filtersSlice.actions;
export default filtersSlice.reducer;
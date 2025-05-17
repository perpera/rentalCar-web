import {createSlice} from '@reduxjs/toolkit';
import {fetchCars} from './operations.js';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    totalPages: 1
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        resetCars: (state) => {
            state.items = [];
            state.totalPages = 1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        }).addCase(fetchCars.fulfilled, (state, action) => {
            state.isLoading = false;
            const cars = Array.isArray(action.payload?.cars) ? action.payload.cars : [];
  const totalPages = action.payload?.totalPages ?? 1;

  state.items = [...state.items, ...cars];
  state.totalPages = totalPages;
        }).addCase(fetchCars.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export const {resetCars} = carsSlice.actions;
export default carsSlice.reducer;
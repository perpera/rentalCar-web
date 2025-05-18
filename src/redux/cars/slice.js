import {createSlice} from '@reduxjs/toolkit';
import {fetchCars} from './operations.js';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    hasMore: true
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
            
    const unique = action.payload.cars.filter(
    car => !state.items.some(existing => existing.id === car.id)
  );

  state.items = [...state.items, ...unique];
  state.hasMore = action.payload.hasMore;
        }).addCase(fetchCars.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export const {resetCars} = carsSlice.actions;
export default carsSlice.reducer;
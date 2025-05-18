import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../services/axios.config.js';

export const fetchCars = createAsyncThunk('cars/fetchCars', async ({page = 1, brand, price, mileageFrom, mileageTo}, thunkAPI) => {
try {
    const params = {page, limit:12};
    if (brand) params.brand = brand;
    if (price) params.rentalPrice = price;
    if (mileageFrom != null) params.minMileage = mileageFrom;
   if (mileageTo != null) params.maxMileage = mileageTo;

    const {data} = await axios.get('/cars', {params});

    const cars = Array.isArray(data.cars) ? data.cars : [];
    const hasMore = cars.length === 12;

    return { cars, hasMore };
} catch (error) {
    return thunkAPI.rejectWithValue(error.message);
}
    }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchBrands = createAsyncThunk(
  "brands/fetchBrands",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/brands");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
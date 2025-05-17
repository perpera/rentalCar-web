export const selectCars = (state) => state.cars.items;
export const selectCarsLoading = (state) => state.cars.isLoading;
export const selectCarsError = (state) => state.cars.error;
export const selectSelectedCar = (state) => state.cars.selectedCar;
export const selectTotalPages = (state) => state.cars.totalPages;

export const selectFavorites = (state) => state.favorites.ids;
export const selectBrands = (state) => state.brands.list;
export const selectBrandsLoading = (state) => state.brands.isLoading;
export const selectFilters = (state) => state.filters;
export const selectFilterBrand = (state) => state.filters.brand;
export const selectFilterPrice = (state) => state.filters.price;
export const selectFilterMileage = (state) => ({
  from: state.filters.mileageFrom,
  to: state.filters.mileageTo,
});
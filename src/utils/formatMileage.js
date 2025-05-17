export const formatMileage = (value) => {
    return value.toSting().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
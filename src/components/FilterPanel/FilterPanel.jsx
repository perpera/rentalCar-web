import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Select from "../../ui/Select/Select";
import { selectBrands } from "../../redux/cars/selectors";
import { setFilter } from "../../redux/filters/slice";
import { fetchBrands } from "../../redux/cars/operations";
import styles from "../FilterPanel/FilterPanel.module.css";

export default function FilterPanel() {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);

  const [localFilters, setLocalFilters] = useState({
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  });

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocalFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setFilter(localFilters));
  };

  return (
    <form className={styles.filterPanel} onSubmit={handleSubmit}>
      <div className={styles.filterList}>
        <Select
          label="Car brand"
          name="brand"
          value={localFilters.brand}
          onChange={handleChange}
          options={brands}
        />
      </div>

      <div className={styles.filterList}>
        <Select
          label="Price/1 hour"
          name="price"
          value={localFilters.price}
          onChange={handleChange}
          options={[30, 40, 50, 60, 70, 80, 90].map((p) => ({
            label: `To ${p}`,
            value: String(p),
          }))}
        />
      </div>

      <fieldset className={styles.mileageBox}>
        <legend className={styles.mileageLegend}>Car mileage / km</legend>
        <div className={styles.inputWrap}>
          <input
            className={styles.fieldInput}
            type="number"
            name="mileageFrom"
            placeholder="From "
            value={localFilters.mileageFrom}
            onChange={handleChange}
          />
          <div className={styles.divider}></div>
          <input
            className={styles.fieldInput}
            type="number"
            name="mileageTo"
            placeholder="To"
            value={localFilters.mileageTo}
            onChange={handleChange}
          />
        </div>
      </fieldset>

      <button type="submit" className={styles.btn}>
        Search
      </button>
    </form>
  );
}
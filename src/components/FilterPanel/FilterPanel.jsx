import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Select from "../../ui/Select/Select";
import { selectBrands } from "../../redux/brands/selectors.js";
import { setFilters } from "../../redux/filters/slice";
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

  const formatNumber = (value) => {
    const numericValue = value.replace(/\D/g, "");
    return numericValue ? Number(numericValue).toLocaleString("en-US") : "";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
const formatted = name === "mileageFrom" || name === 'mileageTo' ? formatNumber(value) : value;

    setLocalFilters((prev) => ({
      ...prev,
      [name]: formatted,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setFilters(localFilters));
  };

  return (
    <form className={styles.filterPanel} onSubmit={handleSubmit}>
      <div className={styles.filterList}>
        <Select
          label="Car brand"
          name="brand"
          value={localFilters.brand}
          onChange={handleChange}
          options={brands.map((b)=> ({label: b, value: b}))}
          placeholder='brand'
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
          placeholder='price'
        />
      </div>

      <fieldset className={styles.mileageBox}>
        <legend className={styles.mileageLegend}>Car mileage / km</legend>
        <div className={styles.wrapper}><div className={styles.inputWrap}>
          <span className={styles.mileageInput}>From</span>
          <input
            className={`${styles.fieldInput} ${styles.fromInput}`}
            type="text"
            name="mileageFrom"
            value={localFilters.mileageFrom}
            onChange={handleChange}
            autoComplete="off"
          /></div>
          <div className={styles.divider}></div>
          <div className={styles.inputWrap}>
            <span className={styles.mileageInput}>To</span><input
            className={`${styles.fieldInput} ${styles.toInput}`}
            type="text"
            name="mileageTo"
            value={localFilters.mileageTo}
            onChange={handleChange}
            autoComplete="off"
          />
          </div>
        </div>
      </fieldset>

      <button type="submit" className={styles.btn}>
        Search
      </button>
    </form>
  );
}
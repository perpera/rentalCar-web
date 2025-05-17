import { useState } from "react";
import styles from "./Select.module.css";
import arrowDown from "../../assets/arrow-down.svg";
import arrowUp from "../../assets/arrow-up.svg";

export default function Select({
  label,
  name,
  value,
  options,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrap}>
      <label className={styles.label}>{label}</label>
      <div className={styles.selectWrap}>
        <select
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          className={styles.select}
        >
          <option value="">Choose a {label.toLowerCase()}</option>
          {options.map((option) => (
            <option
              key={typeof option === "object" ? option.value : option}
              value={typeof option === "object" ? option.value : option}
            >
              {typeof option === "object" ? option.label : option}
            </option>
          ))}
        </select>
        <img
          src={isOpen ? arrowUp : arrowDown}
          alt="Arrow"
          className={styles.arrow}
        />
      </div>
    </div>
  );
}
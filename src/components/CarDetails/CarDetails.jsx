import { useSelector } from "react-redux";
import styles from "../CarDetails/CarDetails.module.css";
import { selectSelectedCar } from "../../redux/cars/selectors";
import { addressSplit } from "../../utils/addressSplit.js";

import CarBooking from "../CarBooking/CarBooking.jsx";
import { formatMileage } from "../../utils/formatMileage";

import LocationIcon from "../../assets/location.svg";
import CheckedIcon from "../../assets/check-circle.svg";
import CalendarIcon from "../../assets/calendar.svg";
import CarIcon from "../../assets/car.svg";
import FuelPumpIcon from "../../assets/fuel-pump.svg";
import GearIcon from "../../assets/gear.svg";

export default function CarDetails() {
  const selectedCar = useSelector(selectSelectedCar);
  if (!selectedCar) return null;

  const {
    id,
    year,
    brand,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = selectedCar;

  const allFeatures = [...accessories, ...functionalities];

  return (
    <div className={styles.carDetailsLayout}>
      <div className={styles.leftColumn}>
        <img className={styles.carImg} src={img} alt={`${brand} ${model}`} />

        <CarBooking carName={`${brand} ${model}`} />
      </div>

      <div className={styles.rightColumn}>
        <h2 className={styles.title}>{`${brand} ${model}, ${year}`}</h2>{" "}
        <span className={styles.carId}>Id: {id}</span>
        <ul className={styles.metaList}>
          <li>
            <img src={LocationIcon} alt="Location" className={styles.icon} />
            {addressSplit(address)}
          </li>
          <li>Mileage: {formatMileage(mileage)}</li>
          <li className={styles.price}>${rentalPrice}</li>
        </ul>
        <p className={styles.description}>{description}</p>
        <div className={styles.descriptionList}>
          <h3 className={styles.title}> Rental Conditions:</h3>
          <ul className={styles.conditionList}>
            {rentalConditions.map((cond, index) => (
              <li className={styles.conditionItem} key={index}>
                <img src={CheckedIcon} alt="check" />
                {cond}
              </li>
            ))}
          </ul>
          <h3 className={styles.title}>Car specifications:</h3>
          <ul className={styles.specList}>
            <li className={styles.conditionItem}>
              <img src={CalendarIcon} alt="Year" className={styles.icon} /> Year:{" "}
              {year}
            </li>
            <li className={styles.conditionItem}>
              <img src={CarIcon} alt="Type" className={styles.icon} /> Type: {type}
            </li>
            <li className={styles.conditionItem}>
              <img src={FuelPumpIcon} alt="Fuel" className={styles.icon} /> Fuel
              Consumption: {fuelConsumption}
            </li>
            <li className={styles.conditionItem}>
              <img src={GearIcon} alt="Engine" className={styles.icon} /> Engine
              Size: {engineSize}
            </li>
          </ul>
          <h3 className={styles.title}>Accessories and functionalities:</h3>
          <ul className={styles.featureList}>
            {allFeatures.map((item) => (
              <li className={styles.conditionItem} key={item}>
                <img src={CheckedIcon} alt="check" className={styles.icon} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {toggleFavorite} from '../../redux/favorites/slice.js';
import {selectFavorites} from '../../redux/favorites/selector.js';
import {formatMileage} from '../../utils/formatMileage.js';
import {addressSplit} from '../../utils/addressSplit.js';
import styles from './CarCard.module.css';
import FavActive from '../../assets/heart-active.svg';
import FavDefault from '../../assets/heart-def.svg';

export default function CarCard({id,
  year,
  brand,
  model,
  img,
  type,
  rentalPrice,
  rentalCompany,
  address,
  mileage,
}) {
    const favorites = useSelector(selectFavorites);
    const isFavorite = favorites.includes(id);
    const dispatch = useDispatch();

const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
}

    return (
        <div className={styles.container}>
      <div className={styles.imgWrap}>
        <img className={styles.imgCard} src={img} alt={`${brand} ${model}`} />
        <button onClick={handleToggleFavorite} className={styles.icon}>
          <img
            src={isFavorite ? FavActive : FavDefault}
            alt={isFavorite ? "In favorites" : "Add to favorites"}
            className={styles.icon}
          />
        </button>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>
            {brand} <span className={styles.model}>{model}</span>, {year}
          </h2>
          <span className={styles.price}>${rentalPrice}</span>
        </div>

        <ul className={styles.detailsList}>
          <li>{addressSplit(address)}</li>
          <li>{rentalCompany}</li>
          <li>{type}</li>
          <li>{formatMileage(mileage)}</li>
        </ul>
        <Link to={`/catalog/${id}`} className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
    );
}
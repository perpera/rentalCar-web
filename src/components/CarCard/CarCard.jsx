import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {selectCars} from '../../redux/cars/selectors.js';
import {toggleFavorite} from '../../redux/favorites/slice.js';
import {selectFavorites} from '../../redux/cars/selectors.js';
import {formatMileage} from '../../utils/formatMileage.js';
import styles from './CarCard.module.css';
import FavActive from '../../assets/heart-active.svg';
import FavDefault from '../../assets/heart-def.svg';

export default function CarCard() {
    const cars = useSelector(selectCars);
    const favorites = useSelector(selectFavorites);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (cars.length === 0) return null;

    return (
        <ul className={styles.grid}>{cars.map(({id, year, brand, model, img, type, rentalPrice, rentalCompany, address, mileage}) => {
            const isFav = favorites.includes(id);
            const [city, state] = address.split(', ');
            return (
                <li key={id} data-car-card className={styles.card}><div className={styles.imgWrapper}>
                    <img src={img} alt={`${brand} ${model}`} className={styles.photo}/>
                <button onClick={()=> dispatch(toggleFavorite(id))} className={styles.favIcon} aria-label="Toggle favorite">{isFav ? <FavActive/> : <FavDefault/>}</button></div>
                <div className={styles.info}><div className={styles.header}>
<h3 className={styles.title}>{brand} {model}, {year}</h3>
<span className={styles.price}>{rentalPrice}</span></div>
<ul className={styles.meta}>
    <li>{city}</li>
    <li>{state}</li>
    <li>{rentalCompany}</li>
    <li>{type}</li>
    <li>{formatMileage(mileage)} km</li>
</ul>
<button onClick={()=> navigate(`/cars/${id}`)} className={styles.readMore}>Read more</button>
                </div>
                </li>
            )
        })}</ul>
    );
}
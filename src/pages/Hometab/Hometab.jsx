import { Link } from "react-router-dom";
import Skeleton from "../../components/Skeleton/Skeleton";
import styles from './Hometab.module.css';

export default function Hometab() {
    return (
        <>
        <Skeleton/>
    <div className={styles.container}>
      <h1 className={styles.title}>Find your perfect rental car</h1>
      <p className={styles.subtitle}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link to="/catalog" className={styles.button}>
        View Catalog
      </Link>
    </div>
    </>
  );
}
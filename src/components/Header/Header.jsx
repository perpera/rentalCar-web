import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg';
import styles from './Header.module.css';

export default function Header() {
    return (
        <>
        <header className={styles.header}>
       <NavLink to='/'> <img src={logo} alt="Logo"/></NavLink>
       <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          end
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Catalog
        </NavLink>
      </nav>
        </header>
        </>
    );
}
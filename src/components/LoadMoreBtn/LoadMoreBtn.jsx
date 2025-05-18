import clsx from "clsx";
import Loader from '../../ui/Loader/Loader';
import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ children,
  isLoading,
  onClick,
  disabled,
  className,
  size }) {
  return (
    <div className={styles.wrap}>
      <button className={clsx(
        styles.btn,
        className,
        isLoading ? styles.disabled : "btn-pr-effect"
      )} disabled={isLoading || disabled} onClick={onClick}>
        {isLoading ? <Loader size={size} /> : children}
      </button>
    </div>
  );
}
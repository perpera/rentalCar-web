import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ handleChangePage }) {
  return (
    <div className={styles.wrap}>
      <button className={styles.btn} onClick={handleChangePage}>
        Load More
      </button>
    </div>
  );
}
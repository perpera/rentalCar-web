import styles from './Loader.module.css';

export default function Loader() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
		<h1 className={styles.header_title}>Loading, please wait</h1>
	</header>
    <main className={styles.container}>
		<div className={styles.item}>
			<i className={styles.loader_4}></i>
		</div>
	</main>
</div>
    );
}
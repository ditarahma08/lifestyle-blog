import styles from '@/styles/Navbar.module.css'

const Navbar = () => {
	return (
		<div className={`d-flex justify-content-between ${styles.navbar}`}>
			<div className={styles.logo}>
				<p>LOGOOOOOO</p>
				<p>WEB DEVELOPER</p>
			</div>

			<div className={`d-flex ${styles.menu}`}>
				<div className={`d-flex flex-column me-3 ${styles.menuGroup}`}>
					<a href="">All Articles</a>
					<a href="">Food & Drink</a>
				</div>

				<div className={`d-flex flex-column me-3 ${styles.menuGroup}`}>
					<a href="">Fashion & Beauty</a>
					<a href="">Travel</a>
				</div>

				<div className={`d-flex flex-column ${styles.menuGroup}`}>
					<a href="">Film</a>
					<a href="">Business & Work</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar
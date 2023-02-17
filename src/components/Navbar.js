import { useState } from 'react'
import styles from '@/styles/Navbar.module.css'

const Navbar = () => {
	const [openHamburger, setOpenHamburger] = useState(false)

	return (
		<div className={`d-flex justify-content-end pt-5 ${styles.navbar}`}>
			<div className={`d-flex flex-column ${styles.logo}`}>
				<span>LOGOOOOOO</span>
				<span>WEB DEVELOPER</span>
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

			<div className={`mx-5 ${styles.hamburger} ${openHamburger ? styles.open : ''}`} onClick={() => setOpenHamburger(!openHamburger)}>
				<span className={`${styles.iconBar} ${styles.top}`}></span>
				<span className={`${styles.iconBar} ${styles.mid}`}></span>
				<span className={`${styles.iconBar} ${styles.bot}`}></span>
			</div>

			{openHamburger && (
				<div>
					<ul>
						<li>All Articles</li>
						<li>Food & Drink</li>
						<li>Fashion & Beauty</li>
						<li>Travel</li>
						<li>Film</li>
						<li>Business & Work</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default Navbar
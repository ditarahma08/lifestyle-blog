import { useState, useEffect } from 'react'
import { categories } from '../utils/response'
import styles from '@/styles/Navbar.module.css'

const Navbar = (props) => {
	const { onChange, active } = props;
	const [openHamburger, setOpenHamburger] = useState(false)
	const [dataCategories, setDataCategories] = useState([])

	const formatCategories = () => {
		let newCategories = [[{id: 0, title: 'All Articles'}]]
		let currentIndex = 0

		for (let i = 0; i < categories.data.length; i++) {
			if (newCategories[currentIndex].length < 2) {
				newCategories[currentIndex].push(categories.data[i])
			} else {
				newCategories.push([])
				newCategories[currentIndex + 1].push(categories.data[i])
				currentIndex++
			}
		}

		setDataCategories(newCategories)
	}

	useEffect(() => {
			formatCategories()
	}, [])

	return (
		<div className={`d-flex justify-content-end pt-5 ${styles.navbar}`}>
			<div className={`d-flex flex-column ${styles.logo}`}>
				<span>LOGOOOOOO</span>
				<span>WEB DEVELOPER</span>
			</div>

			<div className={`d-flex ${styles.menu}`}>
				{dataCategories.map((categories, index) => (
					<div className={`d-flex flex-column me-3 ${styles.menuGroup}`} key={`categories-group-${index}`}>
						{categories.map((category, indexCategory) => (
							<a
								key={`category-item-${indexCategory}`}
								href="javascript:void(0)"
								className={active === category.id ? styles.active : ''}
								onClick={() => onChange(category.id)}
							>
								{category.title}
							</a>
						))}
				</div>
				))}
			</div>

			<div className={`mx-5 ${styles.hamburger} ${openHamburger ? styles.open : ''}`} onClick={() => setOpenHamburger(!openHamburger)}>
				<span className={`${styles.iconBar} ${styles.top}`}></span>
				<span className={`${styles.iconBar} ${styles.mid}`}></span>
				<span className={`${styles.iconBar} ${styles.bot}`}></span>
			</div>


			<div className={`d-flex justify-content-center align-items-center ${styles.sheet} ${openHamburger ? styles.open : ''}`}>
				<ul>
					{categories.data.map((category, index) => (
						<li
							key={`category-list-${index}`}
							className={active === category.id ? styles.active : ''}
							onClick={() => {
								onChange(category.id)
								setOpenHamburger(!openHamburger)
							}}>
							{category.title}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
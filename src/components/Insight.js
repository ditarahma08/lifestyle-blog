import styles from '@/styles/Insight.module.css'
import Card from './Card'
import { useState, useEffect } from 'react'

const Insight = ({ data }) => {
	const [articles, setArticles] = useState([])

	const assignFeaturedArticles = (arrayData) => {
		let newData = []
		arrayData.map((article) => article.is_featured === true && newData.push(article) )
		setArticles(newData)
	}

	const selectedArticles = () => {
		return articles.sort(() => Math.random() - Math.random()).slice(0, 3)
	}

	useEffect(() => {
		assignFeaturedArticles(data)
	}, [data])

	return (
		<div className={`${styles.insight} py-5 px-4`}>
			<div className="d-flex flex-column align-items-center">
				<h1>Empowering Minds</h1>
				<p>Insights and Strategies for Personal and Professional Growth</p>
			</div>

			<div className="row">
				{selectedArticles().map((article, index) =>
					<Card data={article} key={index} isFooter={true} />
				)}
			</div>
		</div>
	)
}

export default Insight
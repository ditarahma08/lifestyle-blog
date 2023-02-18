import styles from '@/styles/Article.module.css'
import MainLayout from '../../../layouts/MainLayout'
import Card from '../../../components/Card'
import Insight from '../../../components/Insight'
import Footer from '../../../components/Footer'
import { months } from '../../../utils/constant'
import { articles } from '../../../utils/response'
import { useState, useEffect } from 'react'

const Article = (props) => {
	const { id } = props
	const [article, setArticle] = useState({})

 	const assignArticle = (data) => {
 		let selectedArticle = {}

 		data.map((article) => {
 			if (article.id == id) {
 				selectedArticle = article
 			}
 		})

 		setArticle(selectedArticle)
 	}

	useEffect(() => {
		assignArticle(articles.data)
	}, [articles])

  const getFormattedDate = (createdAt) => {
  	const date = new Date(createdAt)
  	return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

	return (
		<MainLayout>
			<div className={`container my-5`}>
				<div className={`d-flex align-items-end ${styles.hero}`} style={{ backgroundImage: `url(${article?.image})` }}>
					<div className={`px-4 py-1 ${styles.ribbon}`}>
						<span>PUBLISHED {getFormattedDate(article?.created_at).toUpperCase()}</span>
						<span>BY <span className={styles.author}>{article?.author.toUpperCase()}</span></span>
					</div>
				</div>

				<div className={`my-5 pb-4 d-flex justify-content-center ${styles.header}`}>
					<div className={styles.wrapper}>
						<h1 className="mb-4">{article?.title}</h1>
						<h4 className="mb-3">{article?.summary}</h4>
					</div>
				</div>

				<div className="d-flex justify-content-center">
					<div className={`${styles.content} ${styles.wrapper}`}>
						<p>{article?.content}</p>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}

export default Article

export async function getServerSideProps({ query }) {
	 const { id } = query;
	 return { props: { id } }
}
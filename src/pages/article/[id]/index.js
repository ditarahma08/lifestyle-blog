import styles from '@/styles/Article.module.css'
import MainLayout from '../../../layouts/MainLayout'
import Card from '../../../components/Card'
import Insight from '../../../components/Insight'
import Footer from '../../../components/Footer'
import { months } from '../../../utils/constant'

const Article = () => {
	const article = {
      "id": 1,
      "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "author": "Daniel Wilson",
      "is_featured": false,
      "categories": {
        "id": 1,
        "title": "Food"
      },
      "title": "10 Simple and Delicious Ways to Cook with Quinoa",
      "summary": "Quinoa is an incredibly versatile and nutritious ingredient that should be in any home cook's pantry. It's great for adding texture and nutrition to any meal and it's also gluten-free. I highly recommend experimenting with it in different recipes.",
      "content": "Quinoa is a versatile and nutritious grain that can be used in a variety of dishes. Here are 10 simple and delicious ways to cook with quinoa:\n\nAs a side dish: Cook quinoa according to package instructions and season with salt, pepper, and your choice of herbs and spices. Serve as a side dish with your favorite protein.\n\nIn salads: Cook quinoa and let it cool. Then, mix it with your favorite vegetables and a vinaigrette dressing for a healthy and flavorful salad.\n\nIn soups: Add cooked quinoa to your favorite soups for a boost of protein and texture.\n\nIn breakfast bowls: Cook quinoa and mix it with your favorite fruits, nuts, and a drizzle of honey for a delicious and nutritious breakfast bowl.\n\nIn buddha bowls: Cook quinoa and mix it with roasted vegetables, a protein source such as tofu or tempeh, and a flavorful dressing for a satisfying buddha bowl.\n\nIn burgers: Mix cooked quinoa with mashed beans, herbs, and spices to make quinoa burgers.\n\nAs a stuffing: Mix cooked quinoa with chopped vegetables and herbs, and use it as a stuffing for bell peppers or tomatoes.\n\nIn meatloaf: Mix cooked quinoa with ground meat, eggs, and seasonings to make quinoa meatloaf.\n\nIn meatballs: Mix cooked quinoa with ground meat, eggs, and seasonings to make quinoa meatballs.\n\nIn desserts: Quinoa can also be used in sweet dishes such as cakes, pies, and puddings. Mix cooked quinoa with your favorite fruits, nuts, and sweeteners for a unique and healthy dessert.\n\nQuinoa is a delicious and nutritious grain that can be used in a variety of dishes. These 10 ways to cook with quinoa are just a few examples of how versatile this grain can be. Experiment with different seasonings, vegetables, and protein sources to create your own unique quinoa dishes.",
      "created_at": "2016-04-07T08:45:06.469Z"
  }

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
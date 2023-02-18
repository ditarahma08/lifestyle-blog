import styles from '@/styles/Card.module.css'
import { useRouter } from 'next/router'

const Card = ({data, isFooter = false}) => {
	const router = useRouter();

	const loadImage = (id) => {
		let element = document.getElementById(id);
  	element.classList.add("loaded");
	}

	return (
		<div className={`col d-flex flex-column justify-content-center align-items-center m-3 ${styles.card} ${isFooter ? styles.footer : ''}`} onClick={() => router.push(`/article/${data.id}`)}>
			<img id={`cardImage${data.id}`} src={data?.image} alt={`image-${data.id}`} onLoad={() => loadImage(`cardImage${data.id}`)}/>
			<div className={`px-2 my-3 ${styles.author}`}>BY <b>{data?.author?.toUpperCase()}</b></div>
			<h4>{data?.title}</h4>
		</div>
	)
}

export default Card
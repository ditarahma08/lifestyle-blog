import styles from '@/styles/Card.module.css'

const Card = ({data, isFooter = false}) => {
	return (
		<div className={`col d-flex flex-column justify-content-center align-items-center m-3 ${styles.card} ${isFooter ? styles.footer : ''}`}>
			<img src={data?.image} />
			<div className={`px-2 my-3 ${styles.author}`}>BY <b>{data?.author.toUpperCase()}</b></div>
			<h4>{data?.title}</h4>
		</div>
	)
}

export default Card
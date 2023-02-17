import styles from '@/styles/Footer.module.css'

const Footer = () => {
	return (
		<div className={`d-flex justify-content-between align-items-center px-5 py-3 ${styles.footer}`}>
			<div className="d-flex align-items-center">
				<img src="/sequis.png" alt="sequis-logo" width={35} height={35} />

				<div className={`d-flex flex-column ms-2 ${styles.logoText}`}>
					<span>Sequis</span>
					<span><b>Innovation</b></span>
					<span><b>Lab</b></span>
				</div>
			</div>

			<div>
				<h5>The more that you read, the more things you will know.The more that you learn, the more places you'll go.</h5>
				<p>Created by the <a href="">Innovation Lab</a> for testing web development skills.</p>
			</div>
		</div>
	)
}

export default Footer
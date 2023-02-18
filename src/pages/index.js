import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import MainLayout from '../layouts/MainLayout'
import { articles } from '../utils/response'
import Card from '../components/Card'
import Insight from '../components/Insight'
import  { useState, useEffect } from 'react'

export default function Home() {
  const [activeCategories, setActiveCategories] = useState(0)

  useEffect(() => {
    // console.log(activeCategories)
  }, [activeCategories])

  return (
    <>
      <MainLayout activeFilter={activeCategories} onChangeCategories={(value) => setActiveCategories(value)}>
        <div className={`container ${styles.main}`}>
          <div className="row">
            {articles.data.map((article) =>
              article.is_featured === true && (
                <Card data={article} />
              )
            )}
          </div>

          <div className="d-flex justify-content-center my-4">
            <button className={`px-5 py-3 ${styles.buttonMore}`}>MORE ARTICLES</button>
          </div>
        </div>

        <div className="row">
          <Insight data={articles.data} />
        </div>
      </MainLayout>
    </>
  )
}

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import MainLayout from '../layouts/MainLayout'
import { articles } from '../utils/response'
import Card from '../components/Card'
import Insight from '../components/Insight'
import  { useState, useEffect } from 'react'

export default function Home() {
  const [activeCategories, setActiveCategories] = useState(0)

  const sortedArticles = () => {
    return articles.data.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })
  }

  useEffect(() => {
    // console.log(activeCategories)
  }, [activeCategories])

  return (
    <>
      <MainLayout activeFilter={activeCategories} onChangeCategories={(value) => setActiveCategories(value)}>
        <div className={`container ${styles.main}`}>

          {activeCategories === 0 ? (
            <div className="row">
              {sortedArticles().map((article, index) =>
                article.is_featured === false && index < 10 && (
                  <Card data={article} />
                )
              )}
            </div>
          ) : (
            <div className="row">
              {sortedArticles().map((article, index) =>
                article.is_featured === false && index < 10 && article.categories.id === activeCategories && (
                  <Card data={article} />
                )
              )}
            </div>
          )}

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

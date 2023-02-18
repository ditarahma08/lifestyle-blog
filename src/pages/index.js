import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import MainLayout from '../layouts/MainLayout'
import { articles } from '../utils/response'
import Card from '../components/Card'
import Insight from '../components/Insight'
import  { useState, useEffect } from 'react'

export default function Home() {
  const [activeCategories, setActiveCategories] = useState(0)
  const [shownArticles, setShownArticles] = useState([])
  const [validArticles, setValidArticles] = useState([])
  const [hasMore, setHasMore] = useState(true)

  const sortedArticles = () => {
    let notFeatured = []

    articles.data.map((article) => !article.is_featured && notFeatured.push(article))

    return notFeatured.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })
  }

  const assignShownArticles = () => {
    let activeArticles = []
    let filteredArticles = []

    if (activeCategories !== 0) {
      sortedArticles().map((article) => {
        if (article.categories.id === activeCategories) {
          filteredArticles.push(article)
          if (activeArticles.length < 10) { activeArticles.push(article) }
        }
      })

      setValidArticles(filteredArticles)
    } else {
      sortedArticles().map((article) => activeArticles.length < 10 && activeArticles.push(article))

      setValidArticles(sortedArticles())
    }

    setShownArticles(activeArticles)
  }

  const showMore = () => {
    let tempValidArticles = validArticles

    if (tempValidArticles.length > shownArticles.length) {
      tempValidArticles = validArticles.slice(shownArticles.length)
      tempValidArticles = tempValidArticles.slice(0, 10)
    }

    setShownArticles([...shownArticles, ...tempValidArticles])
  }

  useEffect(() => {
    assignShownArticles()
  }, [activeCategories])

  useEffect(() => {
    validArticles.length > shownArticles.length ? setHasMore(true) : setHasMore(false)
  }, [shownArticles])

  return (
    <>
      <MainLayout activeFilter={activeCategories} onChangeCategories={(value) => setActiveCategories(value)}>
        <div className={`container ${styles.main}`}>
          <div className="row">
            {shownArticles.map((article, index) => (
                <Card data={article} key={index} />
            ))}
          </div>

          {hasMore === true && (
            <div className="d-flex justify-content-center my-4">
              <button className={`px-5 py-3 ${styles.buttonMore}`} onClick={() => showMore()}>MORE ARTICLES</button>
            </div>
          )}

        </div>

        <div className="row">
          <Insight data={articles.data} />
        </div>
      </MainLayout>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import MainLayout from '../layouts/MainLayout'
import { articles } from '../api/response'
import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className={`d-flex justify-content-between ${styles.main}`}>
          { articles.map((article, index) => (
            <Card data={article} />
          ))}
        </div>
      </MainLayout>
    </>
  )
}

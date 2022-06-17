import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
//import {getServerSideProps } from 'next'




export default function Home() {

  return (
    <div className={styles.container}>
      <Nav />
      <Head>
        <title>Create Next App</title>
      </Head>
    </div>
  )
}

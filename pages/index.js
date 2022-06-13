import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Nav from '../components/nav'

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

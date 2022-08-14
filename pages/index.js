import React from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "./components/nav"
//import Kontaktit from "../src/components/Kontaktit/index"
//import Huolto from "../src/components/Huolto/index"
//import About from "../src/components/About"
//import './db.ts'
export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <Head>
        <title>Rekisteri</title>    
        <ul>
          <p>CRUD harjoittelu sivusto React-Next ja Prisma combinaatiolla</p>
        </ul>
      </Head>
    </div>
  )
}

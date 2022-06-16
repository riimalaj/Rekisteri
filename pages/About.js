import Nav from '../components/nav'
import aboutStyle from '../styles/About.module.css'
import React, {useEffect, useState} from "react"

export default function about() {
 /*
  const [d, setD] = useState();
  
  useEffect = (()=>{
    let today = new Date().toLocaleString();
    setD(today);
  },[])
*/
let today = new Date().toISOString;
  return (
    <div>
        <Nav />
        <div className={aboutStyle.about}>
          <h3>Author: Jouni Riimala</h3>
          <h3>SW: Register sw made with next.js and prisma.</h3>
          <h3>{today}</h3>
        </div>        
    </div>
  )
}

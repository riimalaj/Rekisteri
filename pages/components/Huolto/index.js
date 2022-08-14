import Link from 'next/link'
import formiStyle from '../../../styles/Formi.module.css'
import Nav from '../nav'
//import { PrismaClient } from '@prisma/client'
import '../../db'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {nanoid} from 'nanoid'
import Lue, { LueData } from "./LueData"

const showHuoltoData = () => {
    console.log('index.js showHuoltoData') 
    const [rec, setRec] = useState([])      
    const bid = nanoid()
    const data = Array.from(rec);
    console.log("data:", data)        
    
    const huollot = () => {
        console.log('index.js huollot')
        fetch('../../../api/lueData',{
            method: 'GET'
        })
        .then(data => rec.json())
        console.log("luettu data: ", data)
        //const newData = JSON.parse(JSON.stringify(huollot))     
    }
    
    return (        
        <div>
            <Nav/>            
            { 
                data.map(r => <h3>{r.huolto + ", " + r.kohde}</h3>)
            }
           
            <table className={formiStyle.taulu}>
                <thead className={formiStyle.taulunHeader}>
                    <tr key = {bid + 3}>
                        <th>PVM</th><th>Kohde</th><th>Huolto</th><th>KM</th><th>Lisäinfo</th><th>Muokkaa</th><th>Poista</th>
                    </tr>
                </thead>
                <tbody key = {bid}>
                {/*
                huollot.map((e)=> (         
                    <>
                    <tr key={e.id}>                        
                        <td>{e.createdAt}</td>                        
                        <td>{e.kohde}</td>
                        <td>{e.huolto}</td>
                        <td>{e.km}</td>
                        <td>{e.info}</td>    
                        <td><button onClick = {() => muokkaaRec(e.id)}>Muokkaa</button></td>                                            
                        <td><button onClick = {() => poistaRec(e.id)}>Poista</button></td>
                    </tr>                                        
                    </>                                                                       
                )) 
                */               
                }
                </tbody>
                </table> 
                
              
            <Link key = {bid + 5} href = "./Huolto/lisaaHuolto"><button className = {formiStyle.button}><a>Uusi huolto</a></button></Link>            
        </div>              
)

}



export default showHuoltoData;
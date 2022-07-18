import Link from 'next/link'
import formiStyle from '../../styles/Formi.module.css'
import Nav from '../../components/nav'
import { prisma } from '../db'
import {nanoid} from "nanoid"

import { useRouter } from 'next/router'
import { useState } from 'react'

export const muokkaaRec = () => {
    console.log("muokkaaRec")    
 return(<Link href = "/Huolto/paivitaHuolto">Paivita Huolto Recordi</Link>)
}


const showHuoltoData = ({huollot}) => { 
    const [rec, setRec] = useState([])      
    const bid = nanoid()

    //how to render results via state :) ?
    const muokkaaRec = (id) => {
        console.log("muokkaaRec, id:", id)
        fetch('../api/muokkaaRecord',{
            method:'POST',
            body:id
        })
        .then(rec => rec.json())
        .then(data => {
            setRec(preRec => {
                return {
                ...preRec,
                data                
            }
            
            }
                )
        });
        

    }

    const poistaRec = (id) => {
        console.log("poistaRec id:", id)
        fetch('../api/deleteHuolto', {
            method: 'DELETE',
            body:id
        })
        .then (response => response.json())
        .then (result => {
            console.log("Results:", result)
        })
    }

    const data = Array.from(rec);
    console.log("data:", data)

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
                {huollot.map((e)=> (         
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
                }
                </tbody>
                </table> 
                
              
            <Link key = {bid + 5} href = "./Huolto/lisaaHuolto"><button className = {formiStyle.button}><a>Uusi huolto</a></button></Link>            
        </div>              
)

}

export async function getServerSideProps() {        
        const huollot = await prisma.Huolto.findMany()
        const newData2 = Object.values(huollot)
        //const c = JSON.stringify(huollot)
        console.log(JSON.stringify(huollot))
        const newData = JSON.parse(JSON.stringify(huollot)) 
    
        return{
            props:{            
                huollot:newData
            }
    }
}

export default showHuoltoData;
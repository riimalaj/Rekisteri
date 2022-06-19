import Link from 'next/link'
import formiStyle from '../../styles/Formi.module.css'
import Nav from '../../components/nav'
import { prisma } from '../db'
import {nanoid} from "nanoid"
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const muokkaaRec = () => {
    console.log("muokkaaRec")    
 return(<Link href = "/Huolto/paivitaHuolto">Paivita Huolto Recordi</Link>)
}


const showHuoltoData = ({huollot}) => {       
    const bid = nanoid()

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

    return (        
        <div>
            <Nav key = {bid}/>
            <table key = {bid + 1}className={formiStyle.taulu}>
                <thead key = {bid + 2} className={formiStyle.taulunHeader}>
                    <tr key = {bid + 3}>
                        <th>PVM</th><th>Kohde</th><th>Huolto</th><th>KM</th><th>Lisäinfo</th><th>Muokkaa</th><th>Poista</th>
                    </tr>
                </thead>
                <tbody key = {bid + 4}>
                {huollot.map((e)=> (         
                    <>
                    <tr key={e.id}>                        
                        <td>{e.createdAt}</td>                        
                        <td>{e.kohde}</td>
                        <td>{e.huolto}</td>
                        <td>{e.km}</td>
                        <td>{e.info}</td>                        
                        <td><button onClick = {() => location.href="./Huolto/paivitaHuolto".concat(e.id)}>Muokkaa</button></td>
                        <td><button onClick = {() => poistaRec(e.id)}>Poista</button></td>
                    </tr>                                        
                    </>                                                                       
                ))                
                }
                </tbody>
                </table> 
                
              
            <Link key = {bid + 5} href = "./huolto/lisaaHuolto"><button className = {formiStyle.button}><a>Uusi huolto</a></button></Link>            
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
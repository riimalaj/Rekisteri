import Link from 'next/link'
import formiStyle from '../../styles/Formi.module.css'
import Nav from '../../components/nav'
import { prisma } from '../db'
import {nanoid} from "nanoid"


const showHuoltoData = ({huollot}) => {       
    const bid = nanoid()

    const muokkaaRec = () => {
        console.log("muokkaaRec - funkkari")
        return(
            <Link key = {bid} href = "/paivitaHuolto"><a>Muokkaa</a></Link>
            )
        
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


    return (        
        <div key = {bid}>
            <Nav />
            <table className={formiStyle.taulu}>
                <thead className={formiStyle.taulunHeader}>
                    <tr>
                        <th>PVM</th><th>Kohde</th><th>Huolto</th><th>KM</th><th>Lisäinfo</th><th>Muokkaa</th><th>Poista</th>
                    </tr>
                </thead>
                <tbody>
                {huollot.map((e)=> (         
                    <>
                    <tr key={e.id}>                        
                        <td>{e.createdAt}</td>                        
                        <td>{e.kohde}</td>
                        <td>{e.huolto}</td>
                        <td>{e.km}</td>
                        <td>{e.info}</td>                        
                        <td><button onClick = {() => muokkaaRec()}>Muokkaa</button></td>
                        <td><button onClick = {() => poistaRec(e.id)}>Poista</button></td>
                    </tr>                                        
                    </>                                                                       
                ))                
                }
                </tbody>
                </table> 
                
              
            <Link href = "./huolto/lisaaHuolto"><button className = {formiStyle.button}><a>Uusi huolto</a></button></Link>            
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
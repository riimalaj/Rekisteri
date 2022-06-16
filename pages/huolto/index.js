import {PrismaClient} from "@prisma/client"
import React from "react"
import Link from 'next/link'
import formiStyle from '../../styles/Formi.module.css'
import Nav from '../../components/nav'
import { createDeflate } from "zlib"


const showHuoltoData = ({huollot}) => {    


    const poistaRec = (id) => {
        console.log("Poistettava id:", id)
        
    }

    var id = 0;
    return (        
        <div>
            <Nav />
            <table className={formiStyle.taulu}>
                <thead className={formiStyle.taulunHeader}>
                    <tr>
                        <th>PVM</th><th>Kohde</th><th>Huolto</th><th>KM</th><th>Lisäinfo</th><th>Poista</th>
                    </tr>
                </thead>
                <tbody>
                {huollot.map((e)=> (
                                                            
                    <tr key={e.id}>                        
                        <td>{e.createdAt}</td>                        
                        <td>{e.kohde}</td>
                        <td>{e.huolto}</td>
                        <td>{e.km}</td>
                        <td>{e.info}</td>
                        <button className={formiStyle.poistanappi} onClick = {poistaRec(e.id)}>x</button>
                    </tr>
                    
                ))}            
                </tbody>
            </table>      
            <Link href = "./huolto/lisaaHuolto"><button className = {formiStyle.button}><a>Uusi huolto</a></button></Link>            
        </div>              
)

}

export async function getServerSideProps() {        
    
        const prisma = new PrismaClient()   
    
        
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
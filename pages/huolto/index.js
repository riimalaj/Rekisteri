import {PrismaClient} from "@prisma/client"
import React from "react"
import Link from 'next/link'
import formiStyle from '../../styles/Formi.module.css'
import Nav from '../../components/nav'


const showData = ({huollot}) => {    
    return (        
        <div>
            <table className={formiStyle.taulu}>
                <thead>
                    <tr>
                        <th>Kohde</th><th>Huolto</th><th>KM</th>
                    </tr>
                </thead>
                <tbody>
                {huollot.map((e)=>(                
                    <tr key={e.id}>
                        <td>{e.kohde}</td>
                        <td>{e.huolto}</td>
                        <td>{e.km}</td>
                    </tr>
                ))}            
                </tbody>
            </table>      
            <Link href = "lisaaHuolto"><a>Uusi huolto</a></Link>
        </div>              
)

}

export async function getServerSideProps() {
    const prisma = new PrismaClient()      
    const huollot = await prisma.Maint.findMany()
    const newData = Object.values(huollot)
    //const c = JSON.stringify(huollot)
    console.log(JSON.stringify(huollot))

    return{
        props:{            
            huollot:newData
        }
    }
}

export default showData;
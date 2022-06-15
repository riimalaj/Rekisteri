import { PrismaClient } from "@prisma/client"
import React from "react"
import Nav from '../../components/nav'
import formiStyle from '../../styles/Formi.module.css'
import Link from "next/link"



const showData = ({contactList}) => {
    console.log("contactList:", contactList )
    return (        
        <div>
            <Nav />
            <table className={formiStyle.taulu}>
                <thead className = {taulunHeader}>
                    <tr>
                        <th>Etunimi</th><th>Sukunimi</th><th>Ikä</th>
                    </tr>
                </thead>
                <tbody>
                {contactList.map((e)=>(
                    //console.log(e.lName);
                    <tr key={e.id}>
                        <td>{e.fName}</td>
                        <td>{e.lName}</td>
                        <td>{e.age}</td>
                    </tr>
                ))}            
                </tbody>
            </table>
            <Link href = "lisaaKontakti"><a><button className = {formiStyle.button}>Uusi kontakti</button></a></Link>
        </div>
)

}

export async function getServerSideProps() {
    const prisma = new PrismaClient();
    const contacts = await prisma.playlist.findMany()    
    const newData = Object.values(contacts)
    const c = JSON.stringify(contacts)
    console.log(JSON.stringify(contacts))

    return{
        props:{            
            contactList:newData
        }        
    }
    
}

export default showData;
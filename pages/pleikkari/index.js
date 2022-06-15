import {PrismaClient} from "@prisma/client"
import React from "react"

import formiStyle from '../../styles/Formi.module.css'


const showData = (props) => {
    console.log(props)
    const f = props.contactList.map((e)=>{
        return e.fName
    })
    const l = props.contactList.map((l)=>{
        return l.lName 
    })
    const a = props.contactList.map((a)=>{
        return parseInt(a.age)
    })

    return (        
        <table className={formiStyle.taulu}>
            <thead>
                <tr>
                    <th>Etunimi</th><th>Sukunimi</th><th>Ikä</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>{f}</td><td>{l}</td><td>{a}</td>
            </tr>
            </tbody>
        </table>
)

}

export async function getServerSideProps() {
    const prisma = new PrismaClient()      
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
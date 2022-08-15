import Nav from '../nav'
import formiStyle from '../../../styles/Formi.module.css'
import Link from "next/link"
import { prisma } from '../../db'


const showData = ({contactList}) => {
    console.log("contactList:", contactList )
    return (        
        <div>
            <Nav />
            <table className={formiStyle.taulu}>
                <thead className = {formiStyle.taulunHeader}>
                    <tr>
                        <th>Etunimi</th><th>Sukunimi</th><th>Puhelinnumero</th><th>Sähköposti</th><th>Info</th>
                    </tr>
                </thead>
                <tbody>
                {contactList.map((e)=>(
                    //console.log(e.lName);
                    <tr key={e.id}>
                        <td>{e.fName}</td>
                        <td>{e.lName}</td>
                        <td>{e.tel}</td>
                        <td>{e.email}</td>
                        <td>{e.other}</td>
                    </tr>
                ))}            
                </tbody>
            </table>
            <Link href = "./kontaktit/lisaaKontakti"><a><button className = {formiStyle.button}>Uusi kontakti</button></a></Link>
        </div>
)

}

export async function getServerSideProps() {
        const contacts = await prisma.contact.findMany()    
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
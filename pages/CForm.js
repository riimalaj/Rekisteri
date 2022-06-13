
import {useState} from 'react'
import formiStyle from '../styles/Formi.module.css'
import Nav from "../components/Nav"
import ContactSaver from "./DataSaver"
import { PrismaClient } from ".prisma/client"
import { GetServerSideProps } from 'next'

export async function getServerSideProps() {
    const prisma = new PrismaClient() 

    const res = await prisma.Playlist.findMany()
        
    console.log("res:", res)
    
    return {
      props: { initialContacts: res }, // will be passed to the page component as props
    }    
}


export  default function CForm() {
    const [formData, setFormData] = useState({})

    const contactData = {
        "fName": formData.fName,
        "lName": formData.lName,
        "age": parseInt(formData.age),            
    }

    const saveContact = async(contact) => {
        const response = await fetch('/api/PostData', {
            method:'POST',
            body:JSON.stringify(contact)
        })

        if (!response.ok){
            throw new Error(response.statusText)
        }

        return await response.json()
    }

    const handleInputChange = (event) => {
        console.log(event.target.name)
        setFormData(preFormData => {
            return{
                ...preFormData,
                [event.target.name]: event.target.value
            }
        })
    } 


    console.log("formdata: ", formData)

    const submitData = async (event) => { 
        event.preventDefault;             
        console.log("submitData: ",contactData);    
        await saveContact(contactData)          
    }    

    const readData = async () => {
        await fetch('api/Read', {
            method:'GET'
        })
    }

    return (
    <div>
    <Nav />
    <div className = {formiStyle.form}>
        <form onSubmit={submitData}>
        <input 
            className = {formiStyle.input}
            type = "text"
            name = "fName"
            placeholder = "Etunimi"
            onChange={handleInputChange}
            value={formData.fName}
        />

        <input 
            className = {formiStyle.input}
            type = "text"
            name = "lName"
            placeholder = "Sukunimi"
            onChange={handleInputChange}
            value={formData.lName}
        />

        <input 
            className = {formiStyle.input}
            type = "number"
            name = "age"
            placeholder = "Ikä"
            onChange={handleInputChange}        
            value={formData.age}
        />
        <button className = {formiStyle.button}>Input</button>
        </form>
        <form>
            <button className = {formiStyle.button} onClick = {readData}>Read data</button>
        </form>

    </div>

   
</div>
  )
}


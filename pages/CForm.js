
import {useState} from 'react'
import formiStyle from '../styles/Formi.module.css'
import Nav from "../components/Nav"
import { PrismaClient } from ".prisma/client"
//import { GetServerSideProps } from 'next'



export function ReadData({res}){
    const[data,setData]=useState({})
    setData(res.map((r)=>{r.fName}))
    console.log("showData:", res)
    render()
    return(
        <div>       
          <h3>data</h3>                        
        </div>
    )
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
        const res = await fetch('api/Read', {
            method:'GET'
        })

        return{
            props:{res}
        }
        
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



import {useState} from 'react'
import formiStyle from '../../styles/Formi.module.css'
import Nav from "../../components/Nav"
//import { GetServerSideProps } from 'next'



export function getData(props){    
    const res = props.res
    console.log("showData:", res)
    
    return(
        <div>       
            {res.fName}
        </div>
    )
  }

export  default function CForm() {
    const [formData, setFormData] = useState([])
    const [on, setOn] = useState(false)

    const contactData = {
        "fName": formData.fName,
        "lName": formData.lName,
        "tel": formData.tel,            
        "email": formData.email,
        "other": formData.other,
    }
      
    const saveContact = async(contact) => {
        const response = await fetch('../api/PostData', {
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


    const show = () => setOn(true)
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
            type = "text"
            name = "tel"
            placeholder = "Puhelinnumero"
            onChange={handleInputChange}        
            value={formData.tel}
        />
        <input 
            className = {formiStyle.input}
            type = "text"
            name = "email"
            placeholder = "Sähköposti"
            onChange={handleInputChange}        
            value={formData.email}
        />

        <input 
            className = {formiStyle.input}
            type = "text"
            name = "other"
            placeholder = "Lyhyt info"
            onChange={handleInputChange}        
            value={formData.other}
        />

        <button className = {formiStyle.button}>Talleta</button>
        </form>
    </div>   
</div>
  )
}


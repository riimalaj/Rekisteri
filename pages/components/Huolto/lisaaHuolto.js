
import {useState} from 'react'
import formiStyle from '../../styles/Formi.module.css'
import Nav from "../Nav"
//import { GetServerSideProps } from 'next'

export default function Huolto() {
    console.log("Now in lisaaHuolto.js file")
    const [formData, setFormData] = useState({})
    const [on, setOn] = useState(false)

    const huoltoData = {
        "kohde": formData.kohde,
        "huolto": formData.huolto,
        "pvm": formData.pvm,          
    }
    
    console.log("fd: ", formData)

    const saveHuolto = async(huolto) => {
        const response = await fetch('../api/PostHuolto', {
            method:'POST',
            body:JSON.stringify(huolto)
        })

        if (!response.ok){
            throw new Error(response.statusText)
        }

        return await response.json()
    }

    const handleInputChange = (event) => {
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
        console.log("submitData: ", huoltoData);    
        await saveHuolto(huoltoData)          
    }    

   const show = () => setOn(true)
    return (
    <div>
    <Nav />
        <form onSubmit={submitData}>
            <div className = {formiStyle.myForm}>
            <label>Lisää huolto</label>
            <input 
                className={formiStyle.pvm}
                type = "date"
                name = "date"
                placeholder = "date"
                onChange={handleInputChange}        
                value={formData.pvm}
            />

            <select name="kohde" id="kohde" onChange = {handleInputChange}>
                <option value="-">-</option>
                <option value="Kawasaki KX 250F">Kawasaki KX 250F</option>
                <option value="Yamaha YZ 85">Yamaha YZ 85</option>
                <option value="Reneault Megane 2">Reneault Megane 2</option>
                <option value="Ford Transit">Ford Transit</option>
            </select>
    
            <textarea             
                name = "huolto"
                placeholder = "Huoltodataa"
                onChange={handleInputChange}        
                value={formData.huolto}
            />
            <button>Talleta</button>
            </div>
        </form>
       
</div>
  )
}


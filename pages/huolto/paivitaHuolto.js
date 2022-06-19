
import formiStyle from '../../styles/Formi.module.css'
import Nav from "../../components/Nav"
import { useState, useRef } from "react";
import axios from "axios";

/*
    Read data from prisma table and populate it to form fields.
*/

export const readData = () => {
    console.log("readData- funkkari")
    const res = fetch('./api/Read', {
        method:'GET'
    })
    .then (res => res.json())
    .then (data => console.log(data))
}


export default async function paivitaHuolto() {
    const formRef = useRef()
    const [disable, setDisable] = useState(false)

    const {
        editKohde, 
        editHuolto, 
        editKm, 
        editInfo         
        } = formRef.current;
    
    const kohde = editKohde.value;
    const huolto = editHuolto.value;
    const km = editKm.value;
    const info = editInfo.value;
    
    axios.put("/api/editForm",{
        kohde,
        huolto,
        km,
        info
    })
    
    window.location.reload()    

    return (        
        
    <div>        
    <Nav />    
    <div className = {formiStyle.form}>        
        <form ref = {formRef}>
        {readData}
        <input 
            className = {formiStyle.input}
            type = "text"
            name = "editKohde"
            placeholder = "Kohde"
            defaultValue={huolto.kohde}
        />

        <input 
            className = {formiStyle.input}
            type = "text"
            name = "editHuolto"
            placeholder = "Huolto"            
            value={huolto.huolto}
        />

        <input 
            className = {formiStyle.input}
            type = "number"
            name = "editKm"
            placeholder = "km"
            value={huolto.km}
        />

        <textarea 
            className = {formiStyle.input}            
            name = "editInfo"
            placeholder = "Lisäinfo"            
            value={huolto.info}
        />
        <button className = {formiStyle.button}>Talleta</button>
        </form>
    </div>   
</div>
  )
}


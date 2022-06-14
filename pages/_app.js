import '../styles/globals.css'
import {useState} from "react"
import ContactForm from "./CForm.js"



function MyApp() {
  const [contacts, updateContacts] = useState([])

  const addContact = (contact) => {
    updateContacts([...contacts, contact])
  }
  console.log(contacts)



  return (
  <div>
    <ContactForm addContact = {addContact} />
    
  </div>
  )
}

export default MyApp

import {useState} from 'react'
import formiStyle from '../styles/Formi.module.css'
import nanoid from 'nanoid'

export default function ContactList(props) {
  let id = nanoid()
  console.log("contactlist->contacts:", props.contacts)
  return (
    <div key = {id}>
        {props.contacts.map((contact) => {
            <><div className={formiStyle.output} /><span>{contact.fName}</span><p>{contact.lName}</p><p>{contact.age}</p></>                  
      })}
  </div>  
  )
}

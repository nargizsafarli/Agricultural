import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import ContactStatic from '../Components/ContactStatic/ContactStatic'
import Form from '../Components/FormSection.jsx/Form'

function ContactPage() {
  return (
    <div>
      <Navbar/>
      <ContactStatic/>
      <Form/>
    </div>
  )
}

export default ContactPage
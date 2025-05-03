import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import ContactStatic from '../Components/ContactStatic/ContactStatic'
import Form from '../Components/FormSection.jsx/Form'
import Footer from '../Shared/Footer/Footer'

function ContactPage() {
  return (
    <div>
      <Navbar/>
      <ContactStatic/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default ContactPage
import React from 'react'
import Layout from '../components/Layout/Layout'

const Contact = () => {
  return (
    <Layout title={"contact-us"}>
        <div className='contact'>
        <div>
          <h1>Get in Touch</h1>
          <p>Want to get in touch?? We'd love to hear from you. Here's how you can reach us...</p>
        </div>
        <img src='/images/contact.jpeg' alt='contact' />
        </div>
    </Layout>
  )
}

export default Contact
import React, { use, useState } from 'react'
import '../css/Contact.css'
import { Element } from 'react-scroll'
import  { FiArrowUpRight } from 'react-icons/fi'
const Contact = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")
  const validInput = () => {
    let newError=""
    if(!name.trim())
      newError = "Name field is mandatory!"
    else if(!email.trim())
      newError = "Email field is mandatory!"
    else if(!/\S+@\S+\.\S+/.test(email))
      newError = `${email} Invalid email address!`
    else if(!message.trim()) 
      newError = "Message cannot be empty!"
    setError(newError)
    return (newError.length == 0)
  }
  const handleForm = (e) => {
    e.preventDefault()
    if(validInput()){
      e.target.submit()
      setEmail("")
      setError("")
      setMessage("")
      setName("")
      alert("Message sent successfully!")
    }
  }
  return (
    <Element name='Contact'>
      <form onSubmit={handleForm} className='contact-form' action="https://formsubmit.co/susheethvenkatraman@gmail.com" method="POST">
        <h1 className='contact-header'>Contact</h1>
        <p className='contact-desc'>Have a project, an idea, or just want to say hi? Drop me a message below.</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='name-input' placeholder='Your name goes here..' type='text' name='name'/>
        <input onChange={(e) => setEmail(e.target.value)} value={email} className='email-input' placeholder='Your email goes here..' type='email' name='email'/>
        <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='message-input' placeholder='Your message goes here..' type='text' name='message'/>
        <button type='submit' className='submit-button'>Submit <FiArrowUpRight /></button>
        { error && <p className='error-message'> {error} </p>}
      </form>
    </Element>
  )
}

export default Contact
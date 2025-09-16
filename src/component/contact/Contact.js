import React from 'react'
import "./contactstyle.css"
import { HiOutlineMail } from 'react-icons/hi'
import { BsLinkedin } from 'react-icons/bs'

function Contact() {
  return (
    <section id='contact' className='contactstyle'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='contact'>
        <div className='contactunder'>
          <HiOutlineMail className='icon' />
          <h4>Email</h4>
          <h5>aamirjamil25999@gmail.com</h5>
          <a href="https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=new">Email me!</a>
        </div>
        <div className='contactunder'>
          <BsLinkedin className='icon' />
          <h4>LinkedIn</h4>
          <h5>Aamir Jamil</h5>
          <a href="https://www.linkedin.com/in/aamir-jamil-4266401b5/">Connect with me!</a>
        </div>  
      </div>
    </section>
  )
}

export default Contact

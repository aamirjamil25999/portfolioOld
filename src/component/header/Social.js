import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import "./action.css"

function Social() {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/aamir-jamil-4266401b5/' target='_blank'> <BsLinkedin /> </a>
      <a href='https://github.com/aamirjamil25999' target='_blank'> <BsGithub /> </a>
    </div>
  )
}

export default Social

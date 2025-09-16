import React from 'react'
import Resume from "../../Assets/Resume.pdf"
import "./action.css"




function Action() {
  return (
    <div>
      <div className='action'>
        <a className='btn' href={Resume} download>Download Resume </a>
        <a className='btn btn-primary' href="#contact">Contact me!</a>
      </div>
    </div>
  )
}

export default Action

import React from 'react';
import './Footer.css';
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a className='decoration footer__logo' href="#contact">Aamir Jamil</a>

      <ul className="permalinks">
        <li><a className='decoration' href="#">Home</a></li>
        <li><a className='decoration' href="#about">About</a></li>
        <li><a className='decoration' href="#experience">Experience</a></li>
        <li><a className='decoration' href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Aamir Jamil. All rights reserved.</small>
        <br />
        <small><BsFillTelephoneFill /> +919102026002</small>
      </div>
    </footer>
  );
}

export default Footer;
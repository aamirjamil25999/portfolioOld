import React, { useState } from 'react'
import { BiCodeAlt, BiHome, BiMessage, BiMessageDots, BiUser } from 'react-icons/bi'
import {  HiOutlineDocumentDownload } from 'react-icons/hi'
import { MdWorkOutline } from 'react-icons/md'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Resume from "../../Assets/Resume.pdf"
import "./nav.css"

function Navbar() {

    const [active, setActive] = useState('#')

return (
    <nav>
    <a id="home-title" href="#"
        className={active === '#' ? 'active' : ''}
        onClick={() => setActive('#')}
    >
        <BiHome />
    </a>
    <ReactTooltip
        anchorId="home-title"
        place="top"
        content="Home"
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
    />

    <a id="about-title" href="#about"
        className={active === '#about' ? 'active' : ''}
        onClick={() => setActive('#about')}
    >
        <BiUser />
    </a>
    <ReactTooltip
        anchorId="about-title"
        place="top"
        content="About"
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
    />


    <a id="skills-title" href="#experience"
        className={active === '#experience' ? 'active' : ''}
        onClick={() => setActive('#experience')}
    >
        <BiCodeAlt />
    </a>
    <ReactTooltip
        anchorId="skills-title"
        place="top"
        content="Skills"
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
    />

    
    <a id="project-title" href="#portfolio"
        className={active === '#portfolio' ? 'active' : ''}
        onClick={() => setActive('#portfolio')}
    >
        <MdWorkOutline />
    </a>
    <ReactTooltip
        anchorId="project-title"
        place="top"
        content="Projects"
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
    />
    <a id="contact-title" href="#contact"
        className={active === '#contact' ? 'active' : ''}
        onClick={() => setActive('#contact')}
    >
        <BiMessageDots />
    </a>
    <ReactTooltip
        anchorId="contact-title"
        place="top"
        content="Contact"
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
    />
    <a id="resume-title" href={Resume} download>
        <HiOutlineDocumentDownload />

    </a>
    <ReactTooltip
        anchorId="resume-title"
        place="top"
        content="Resume"
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
    />
</nav>

    )
}

export default Navbar

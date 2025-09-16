import React from 'react'
import { CONTACT } from '../../constants'
import Typewriter from 'typewriter-effect';
import Action from './Action';
import Social from './Social';
import { Player } from '@lottiefiles/react-lottie-player';
import computerAnimation from "../../lattie/animate.json"
import "./header.css"

function Header() {
    return (
        <header>
            <div className="container header__container ">
                <h5>hello I'm</h5>
                <h1>{CONTACT.name}</h1>
                <h5 style={{ color: "#fff" }}>
                    <Typewriter
                        options={{
                            strings: ['Full Stack Web Developer', 'Software Engineer', "Quick Learner"],
                            autoStart: true,
                            loop: true,
                            delay: 80,
                        }}
                    /></h5>

                <Action />
                <Social />



                <a className='scroll__down' href="#contact">Scroll Down</a>

            </div>
            <div className='animation__container '>
                <Player className='animation__item'
                    autoplay
                    loop
                    src={computerAnimation}
                >
                </Player>
            </div>
            
        </header>
    )
}

export default Header

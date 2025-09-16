import React from 'react'
import { SiJavascript, SiTypescript, SiCss3, SiBootstrap, SiChakraui, SiRedux, SiMongodb, SiTestinglibrary, SiExpress, SiAntdesign } from 'react-icons/si';
import "./exeperionce.css"
import { FaGitAlt, FaHtml5, FaNode, FaReact } from 'react-icons/fa';
import { MdHttp } from 'react-icons/md';

function Exeperience() {
    return (
        <section id='experience'>
            <div className='topbar'>
            <h5>Technology Stack</h5>
            <h2>My Experience</h2>
            <br />
            <br />
            </div>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front End</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <FaReact className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>React</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiJavascript className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaHtml5 className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiCss3 className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>CSS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaGitAlt className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>Github</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiRedux className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>Redux</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            < SiAntdesign className='experience__details-icon' />

                            <div className='experience__details-name'>
                                <h4>Tailwind CSS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiBootstrap className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>Bootstrap</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiTestinglibrary className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>Testing</h4>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Back End</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            < FaNode className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>Node</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiMongodb className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>Mongodb</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <MdHttp className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>REST API</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiExpress className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>Express</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Exeperience

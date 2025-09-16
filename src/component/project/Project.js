import React from 'react'
// import { PROJECTS } from '../../constants'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./project.css"
import { BsEye } from 'react-icons/bs';
import { PROJECTS } from '../../constants';

function Project() {



    return (
        <section id='portfolio' className='projecthed'>
            <h5>My top</h5>
            <h2>Projects</h2>
            <br />
            <br />
            <br />

            <div className='cartdiv'>
                {
                    PROJECTS.map((project, index) => {
                        return (
                            <Card className='carts ' key={index} >
                                <Card.Img style={{borderRadius:"15px"}} variant="top" src={project.image} />
                                <Card.Body className='cartbody'>
                                    <Card.Title >{project.title}</Card.Title>
                                    <p>Frontend Role</p>
                                    <p>Tech Stacks : {project.technologies.join(', ')}</p>
                                    <p> About {project.title} : </p>
                                    <Card.Text> {project.description}
                                    </Card.Text>
                                    <Button as="a" href={project.url} className='bigeye' target="_blank" rel="noopener noreferrer"> <BsEye />  </Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Project

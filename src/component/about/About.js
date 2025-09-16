import React from "react";
import MyPhoto from "../../Assets/MyPhoto.jpg";
import "./about.css";
import { BiFolder, BiMedal, BiUser } from "react-icons/bi";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <br />
      <br />

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MyPhoto} alt="A headshot of Arun" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiMedal className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years of Experience in Software Development</small>
            </article>
            <article className="about__card">
              <BiUser className="about__icon" />
              <h5>Education</h5>
              <small>
                Radha Govind University (India) <br />
                Master of Computer Application
              </small>
            </article>
            <article className="about__card">
              <BiFolder className="about__icon" />
              <h5>Hobbies</h5>
              <small>Traveling, Playing cricket, Coding </small>
            </article>
          </div>
          <p>
            Full Stack Developer with 2+ years of hands-on experience building
            scalable, performant web applications using the MERN stack.
            Proficient in both front-end and back-end development, including
            building RESTful APIs, integrating databases, managing state, and
            deploying apps on cloud platforms. Passionate about creating
            intuitive UI/UX and writing clean, maintainable code. Currently
            working on live e- commerce applications with secure authentication
            and payment flows.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
}

export default About;

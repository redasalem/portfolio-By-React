import React from 'react'
import './About.css';
import Imageme from '../../assets/me-about.jpg';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
 <section className='about' id='about'>
  <div className="top-section">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
  </div>
  <div className="container about_container">
    <div className="about_me">
      <div className="about_me_image">
        <img src={Imageme} alt="" />
      </div>
    </div>

    <div className="about_content">
      <div className="about_cards">
        <div className="about-card">
        <FaAward className='about_icon' />
          <h5>Experience</h5>
          <small>3+ years working</small>
        </div>
        <div className="about-card">
        <FiUsers className='about_icon' />
          <h5>Clients</h5>
          <small>200+ workwide</small>
        </div>
        <div className="about-card">
        <VscFolderLibrary className='about_icon' />
          <h5>Projects</h5>
          <small>80+ completed</small>
        </div>

      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum accusantium officia, nobis quos ipsa est molestias natus consequuntur, aliquam expedita recusandae eos aliquid blanditiis amet.</p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  </div>

 </section>
  )
}

export default About
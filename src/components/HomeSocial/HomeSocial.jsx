import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

function HomeSocial() {
  return (
    <>
    <div className='home_social'>
       <a href="#" target='_blank'><FaLinkedinIn /> </a>
       <a href="#" target='_blank'><FaGithub /></a>
       <a href="#" target='_blank'><FaDribbble /></a>

    </div>


    </>
    
    
    

    
  )
}

export default HomeSocial
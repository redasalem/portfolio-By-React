import React from 'react'
import '../home/Home.css';
import Me from '../../assets/me.png'
import CV from '../../assets/cv.pdf'
import HomeSocial from '../HomeSocial/HomeSocial';


function Home() {
  return (
    <div className='home' id='home'>
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Reda Salem</h1>
        <h4 className='text-light'>Frontend Developer</h4>

        <div className="btns">
          <a href={CV} className='btn' download>Download CV</a>
         <a href="#" className='btn btn-primary'>let's talk</a>
        </div>
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="about" className='scroll_down'> scroll Down</a>
        
      <HomeSocial/>
     

      </div>
    </div>
  )
}

export default Home
import React from 'react'
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">RedaSalem</a>
      <ul className="permalinks">
        <li> <a href="#home">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#skils">Skils</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a target='_blank' href="#"><FaFacebookF /></a>
        <a target='_blank' href="#"><FaInstagram /></a>
        <a target='_blank' href="#"><FaTwitter /></a>

      </div>
      <div className="footer__copyright">
        <small>&copy; <a href="#">RecaTech</a> All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
import React, { useState } from 'react'
import './Nav.css';
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";


function Nav() {
  const[activeNav,setactiveNav]=useState("#")
  return (
 <nav>
  <a href="#" className={activeNav === "#" ?"active":""} onClick={()=>setactiveNav("#")}><IoHomeOutline /></a>
  <a href="#about" className={activeNav === "#about" ?"active":""} onClick={()=>setactiveNav("#about")}><LuUserRound /></a>
  <a href="#services" className={activeNav === "#services" ?"active":""} onClick={()=>setactiveNav("#services")}><BiBook /></a>
  <a href="#projects" className={activeNav === "#projects" ?"active":""} onClick={()=>setactiveNav("#projects")}><RiServiceLine /></a>
  <a href="#contact" className={activeNav === "#contact" ?"active":""} onClick={()=>setactiveNav("#contact")}><BiMessageSquareDetail /></a>
 </nav>
  )
}

export default Nav
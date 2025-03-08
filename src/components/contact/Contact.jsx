import React from 'react'
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'



const ContactData = [
  {
    id:1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "Redatech@gmail.com",
    link: "mailto:test@gmail.com",
  },
  {
    id:2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "RedaTech",
    link: "https://m.me/houdareda.99",
  },
  {
    id:3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "0123456789",
    link: "https://api.whatsapp.com/send?phone=01121696299",
  }
];


function Contact() {
  return (
    <section className='contact' id='contact'>
      <div className="top-section">
        <h5>Get In touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({id,icon,title,info,link})=>(
            <article key={id} className='contact_option'>
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target='_blank'>Send Massage</a>

            </article>
          ))}

        </div>
        <form action="">
          <input type="text" placeholder='Full Name' name='name'/>
          <input type="email" name='email' placeholder='Enter email' />
          <textarea rows={7} placeholder='Enter Your Massage' name="" id=""></textarea>
          <button className='btn btn-primary'>Send Massage</button>
        </form>

      </div>

    </section>
  )
}

export default Contact
import React from 'react'
import { NavbarLogo } from '../NavbarLogo'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import  Mail  from "../../assets/imagenes/MailWhite - copia.png";
import NavbarFooter from '../FooterNAvbar/NavbarFooter';

const Footer = () => {


  return (

    <div className='flex mt-9 flex-col ml-9 gap-4'> 
        <NavbarLogo >  </NavbarLogo>
        <NavLink  className='text-white  ml-3'>Te ayudamos en </NavLink>

        <button className='bg-[gray] rounded py-2 px-3 w-[150px] text-white'>+34 919 49 05 18</button>
        <section className='flex  w-[250px]  bg-[gray] rounded px-6 py-2 gap-2 items-center' >
            <img src={Mail} alt="" className='h-[15px]'/>
        <button className=' text-white'>hola@cafedealtura.com</button>
        </section>

         

      

    
    </div>
  )
}

export default Footer
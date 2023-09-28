import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarRoutes = () => {

  return (
    <div className='bg-[#2B2A2B] text-[#FFFFFF]  px-[3px] py-[2px] flex  justify-center gap-[24px] items-center text-[14px] font-semibold '>

        <Link to="/"> Tienda </Link>
        <Link to="/"> Suscripción  </Link>
        <Link to="/"> Para empresas  </Link>
        <Link to="/"> Sobre nosotros  </Link>
        <Link to="/"> Contacto  </Link>

    </div>
    
  )
}

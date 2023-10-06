import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarRoutes = () => {

  return (
    <div className='bg-[#2B2A2B] text-[#FFFFFF]  px-[3px] py-[2px] flex  justify-center gap-[28px] items-center text-[14px] font-semibold '>

        <Link to="/tienda"> Tienda </Link>
        <Link to="/Suscripción"> Suscripción  </Link>
        <Link to="/empresas"> Para empresas  </Link>
        <Link to="/about"> Sobre nosotros  </Link>
        <Link to="/contact"> Contacto  </Link>

    </div>
    
  )
}

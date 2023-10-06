import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarLogo } from './component/NavbarLogo'
import { NavbarRoutes } from './NavbarRoutes'
import { NavbarContact } from './NavbarContact'
import { NavbarCarrito } from './NavbarCarrito'
import { CarritoCompra } from './component/CarritoCompra'
// import { NavbarRotes } from './NavbarRoutes'
// import { NavbarContact } from './NavbarContact'

export const Navbar = ({}) => {

  return (

    <div className='flex  items-center bg-[#2B2A2B]  justify-around h-[64px] '>

    <Link to="/" className='cursor-pointer'>  <NavbarLogo/>  </Link>

    <NavbarRoutes/>
    
    <div className='flex gap-[20px]'>

        <NavbarContact/>
        

        <NavbarCarrito></NavbarCarrito>
    </div>

    <CarritoCompra></CarritoCompra>
    
    </div>
  )
}

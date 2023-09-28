import React from 'react'
import  logo  from "../assets/imagenes/cafecito.png";




export const NavbarLogo = () => {

  return (

    <div className='flex text-[23.46px] font-normal leading-[35.19px] justify-center bg-[#2B2A2B] text-[white] w-[230px] gap-[7.33px] items-center '>

        <span>Cafedealtura.com</span>
        <img src={logo} alt="logocafeAltura" className='w-[20.53px] h-[24.96px]' />

      

    </div>
      )
}

import React from 'react'
import telf   from "./assets/imagenes/TelPhone.png";

export const NavbarContact = () => {

  return (

    <div className='flex items-center gap-[8px] text-[white]  '>   
        <img src={telf}></img>
        <span>+34 919 49 05 18</span>

    </div>

  )
}

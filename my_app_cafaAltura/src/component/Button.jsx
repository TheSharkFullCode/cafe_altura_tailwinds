import React from 'react'

export const Button = ({label,color}) => {



  return (

    <div className=' '>
        
        <button className={color} > {label}  </button>
        
    </div>
  )
}

import React from 'react'
import { Button } from './Button'




const Seccionproductos = ({name,price,img,}) => {
 

  return (

    <div className='flex flex-col border-[1px] w-[283px] h-[391px]  hover:bg-[#E3DED7] rounded-[8px]  items-center justify-evenly '>
      
        <div className='w-[219px] h-[219]'>

          <img src={img} alt="coffes" className='' />
        </div>
        
      
      <span className='font-medium'>{name}</span>
      <span>{price}</span>

      <Button label={'añadir'} color={' w-[62px] h-[32px] rounded-[8px] px-6 py-3 flex justify-center items-center text-[#ffff] bg-[#2A5B45]'}  /> 



    
    </div>



  )
  
}

export default Seccionproductos
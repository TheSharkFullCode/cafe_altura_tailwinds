import React from 'react'
import CoffeStar from "../../assets/imagenes/sala_cafe(3).png";
import FlechaCoffe from "../../assets/imagenes/flechaBlack.png";
import  {Link}  from "react-router-dom";

const Coffestar = () => {

  return (
    <div className=' h-[480px] flex  justify-around items-center bg-[#F7F5F3]'>

        <div className=' w-[457px] flex flex-col'>
            
                <span className='text-[#2A5B45] text-[24px] font-medium leading-7'>Pruébalo en nuestro coffee shop</span>
                 <span className='text-[#111827] text-[14px] font-normal leading-4 mt-[16px]'> Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</span>
                 
     
            <div className='flex items-center mt-[16px] gap-[16px]' >

            <Link to="/" className=' font-medium leading-4 text-[14px] underline'>Cómo llegar</Link>

            <img src={FlechaCoffe} alt="flechacoffe" className='w-[20px] h-[10px] ' />  
            </div>

        </div>

       <div className=' w-[]' >

             <img src={CoffeStar} alt="" />  
       </div>

    </div>
  )
}

export default Coffestar
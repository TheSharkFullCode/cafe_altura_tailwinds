import React from 'react'
import ComponentFAQ from '../component/ComponentFAQ'
import flechagirada from "../assets/imagenes/dropDown.png";
import Drown from "../assets/imagenes/Icon_abajo.png";
import flecha from "../assets/imagenes/ImgFlecha.png";


export const SeccionFaQ = () => {


  return (


    <div className='h-[621px] bg-[#2A5B45] flex flex-col  items-center '>

        <h1 className='mt-[48px] text-[24px] text-[white] font-medium'>Preguntas frecuentes</h1>

        <div className='flex w-[768px] h-[136px] bg-[#FFFFFF] rounded-[8px] mt-[24px]  '>

        <ComponentFAQ  text1={'¿Cómo hago el pedido?'}
        color={'text-[#2B2A2B] font-semibold text-[18px] '}

        divContent={<div className='w-[736px] border-[0.5px] border-[#E3DED7]'> </div>}

        margin={'ml-[10px]'}
        
        text2={'Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café. ' }


        

        img={flechagirada}
        />    

        </div>

        <div className='w-[768px] h-[190px] rounded-[8px] mt-[20px] bg-[white] '>

        <ComponentFAQ text1={'¿Por qué los precios son tan bajos? '} color={'bg-[white] font-semibold items-center text-[18px] flex  '} img={flechagirada}  divContent={<div className='w-[736px] border-[0.5px] border-[#E3DED7]'> </div>} text2={'Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.'}/>
        </div>

        <div className='bg-[white] mt-[20px] rounded-[8px] w-[768px] '>
          <ComponentFAQ text1={'¿Es posible enviar café a mi oficina?'} color={'text-[18px] font-semibold '}
          img={Drown} />

        </div>
        <div className='flex items-center gap-[20px] mt-[20px]' >

        <span className='text-[14px] font-semibold text-[white]'>Resolvemos tus dudas</span>
        <img src={flecha} className='w-[18px] h-[8px]'></img>
        </div>

    </div>


  )
}


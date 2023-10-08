import React from 'react'
import  phone  from "../../assets/imagenes/img/Phone.png";
import Email from "../../assets/imagenes/img/Mail.png"
import { UseFormulary } from './UseFormulary';

export const Formulary = () => {
  return (
    <div className='h-[552px] bg-[#E3DED7] flex justify-between'>
        <div className='flex flex-col justify-center  '>

            <div className='flex flex-col ml-[16px] w-[600px]  gap-[28px] '>
                 <span className='text-[18px] font-semibold leading-6'>Entra en contacto con nosotros</span>
                 <span className='text-[14px] font-normal leading-4'>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.</span>
                 <span className='text-[14px] font-normal leading-4'>TAmbién puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la tienda.</span>
            <div className='flex flex-col'>
                 <span className='text-[14px] font-normal leading-4'>742 Evergreen Terrace</span>
                 <span className='text-[14px] font-normal leading-4'>Springfield, OR 12345</span>
            </div>
            </div>

            <div className='flex flex-col ml-[16px]  w-[600px] gap-[10px] mt-[15px]'>
                <section className='flex gap-2'>
                    <img src={phone} alt="telefono" />
                <span>+1 (555) 123-4567</span>
                </section>
                <section className='flex gap-2'>
                    <img src={Email} alt="" />
                 <span>support@example.com</span>
                </section>
                <section className='flex items-center gap-2'>
                    <span className='text-[14px] font-normal leading-4'> ¿Buscas un trabajo?</span>
                    <span className='underline font-medium'> Ver nuestras ofertas.</span>
                </section>

            </div>

        </div>

        <div className='w-[588px] h-[552px] bg-[white] mr-[32px]'>
            <UseFormulary/>
        </div>
    </div>
  )
}

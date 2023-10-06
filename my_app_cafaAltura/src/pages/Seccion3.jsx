import React from 'react'
import ComponentSeccion3 from '../component/ComponentSeccion3'
import cafeAltura from "../assets/imagenes/cafe_deAltura.jpeg";
import check from "../assets/imagenes/check.png"
import imgcar from "../assets/imagenes/imgCar.png";
import  imgRegals  from "../assets/imagenes/imgRegals.png";



export const Seccion3 = () => {

    return (

        <div className='bg-cover bg-no-repeat bg-center h-[380px] border-[1px]  flex-col justify-center items-center  ' style={{ backgroundImage: `url(${cafeAltura}) ` }}>

            <div className='flex justify-center items-center mt-[48px] '>

                    <span className='text-[white] text-[24px] font-medium leading-7 '>Café con las mejores condiciones</span>

            </div>  

            <div className='flex gap-[24px]  justify-center mt-[24px] '>

                <ComponentSeccion3
                    imgcard={check}
                    title={'Recibe tu pedido sin preocuparte'}
                    paragraph={'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana'} />

                <ComponentSeccion3
                    imgcard={imgcar}
                    title={'Envío en 24/48h'}
                    paragraph={'Pide tu café antes de las 12h y lo recibirás al día siguiente.'}
                    />

                <ComponentSeccion3                 
                imgcard={imgRegals}
                title={'Descuentos y beneficios'} 
                paragraph={'Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.'}   />
                
            </div>


        </div>
    )
}

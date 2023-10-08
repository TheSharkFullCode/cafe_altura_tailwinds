import React, { useEffect, useState } from "react";
import Seccionproductos from "./Seccionproductos";


  export  const getCoffeProduct = async (url)=>{

        const res = await fetch(url);
        const data = await res.json();
       console.log(data); return data
    


    }

export const Componentproduct = ({number,}) => {    
  
  const [coffes, setCoffes] = useState([]);
  const [text,setText]= useState('Novedades')

    useEffect(()=>{

        getCoffeProduct(`https://cafe-de-altura.vercel.app/api/products`)
        .then((data)=>setCoffes(data.products))

    },[])

        const fourcoffe = coffes.slice(0,number)
 
  return (

    <div className="  flex flex-col px-[40px] gap-[40px] items-center h-[580px] bg-[#FFFFFF]  "> 

        <div className="flex justify-center mt-[40px]">
            <h2 className=" font-medium text-[24px] leading-6 text-[#2A5B45]">{text}</h2>
        </div>

        <div className={'flex flex-wrap  gap-[17px] '}>

        {fourcoffe.map((coffes)=>{
          
          return (
            
            <Seccionproductos  key={coffes._id} img={coffes.img_url} name={coffes.brand} price={`${coffes.price},00€`} />
            
            )
          })}
         
        </div>
          
    </div>
  );
};
export default Componentproduct
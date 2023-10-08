import React, { useEffect,useState } from 'react'
import Componentproduct from './component/Componentproduct'

import { getCoffeProduct } from "./component/Componentproduct.jsx";
import { Seccion3 } from './pages/Seccion3';


export const ProductFect = () => {
    const [coffes, setCoffes] = useState([]);
    console.log(coffes);

    useEffect(()=>{
    
        getCoffeProduct(`https://cafe-de-altura.vercel.app/api/products`)
        .then((data)=>setCoffes(data.products))
    },[])

  return (
    <>
    <div className="h-[940px] ">

            <Componentproduct number={8}/>
    </div>
    <div>
        <Seccion3></Seccion3>
    </div>
    </>
   
  )
}

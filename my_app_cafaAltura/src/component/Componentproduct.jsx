import React, { useEffect, useState } from "react";


    const getCoffeProduct = async (url)=>{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    


    }
export const Componentproduct = () => {    
  
  const [coffes, setCoffes] = useState([]);


    useEffect(()=>{

        getCoffeProduct(`https://cafe-de-altura.vercel.app/api/products`)
        .then((data)=>setCoffes(data.products))

    },[])

 



  return (
    <div>
        
         hello
    </div>
  );
};
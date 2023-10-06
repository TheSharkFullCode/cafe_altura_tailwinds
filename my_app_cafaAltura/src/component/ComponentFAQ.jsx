import React from 'react'



const ComponentFAQ = ({text1,text2,color,divContent,img,}) => {


  return (

    <div className=' ml-[14px]' >

        <div className='flex   items-center  justify-between mt-[15px]'  >

            <span className={color}> {text1} </span>   

            <img src={img} alt="" className='w-[10px] h-[6px] mr-[18px]' />
        </div>
        <div className='mt-[16px]'>

         {divContent}
        </div>

        <div className='mt-[10px] '>


         <span > {text2}</span>
        </div>
        
    </div>    
    


  )
}

export default ComponentFAQ
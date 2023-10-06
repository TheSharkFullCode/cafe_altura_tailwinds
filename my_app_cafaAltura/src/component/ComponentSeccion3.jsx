import React from 'react'


              
const ComponentSeccion3 = ({title,paragraph,imgcard,}) => {


  return (

   <div className='w-[316px]  h-[232px] rounded flex bg-[white] flex-col  items-center justify-evenly ' >
        <div className='bg-[#2A5B45] w-[64px] h-[64px] flex justify-center items-center rounded-[15px] '>

            <img src={imgcard} alt="imgCarta" className='w-[25px] h-[25px]  '  />
        </div>
            

        <div className='flex flex-col justify-center items-center'>
            <span className='text-[18px] font-semibold  leading-[24px] text-[#2B2A2B;]'>{title}</span>
        </div>

            <span className='text-[14px] font-normal leading-[16px] flex justify-center text-center '>{paragraph}</span>

   </div>

 




  )
}

export default ComponentSeccion3
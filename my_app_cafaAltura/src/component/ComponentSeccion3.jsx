import React from 'react'


              
const ComponentSeccion3 = ({title,paragraph,imgcard,}) => {


  return (

   <div className='w-[316px] border-[1px]  h-[232px] rounded flex bg-[white] flex-col  items-center justify-evenly p-6 gap-6' >
        <div className='w-[64px] h-[64px]    border-[1px] rounded bg-[#2A5B45] flex items-center justify-center '>

            <img src={imgcard} alt="imgCarta" />
        </div>
            
        {/* <div className='flex-col justify-center items-center'> */}

        <div className='flex flex-col justify-center items-center'>
            <span className='text-[18px] font-semibold  leading-[24px] text-[#2B2A2B;]'>{title}</span>
        </div>

            <span className='text-[14px] font-normal leading-[16px] flex justify-center text-center '>{paragraph}</span>

        {/* </div> */}
   </div>

 




  )
}

export default ComponentSeccion3
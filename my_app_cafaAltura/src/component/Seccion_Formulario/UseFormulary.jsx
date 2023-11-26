import React from 'react'
import { Link } from 'react-router-dom'


export const UseFormulary = () => {
  return (
    <div className=''>

      <form action="" className='mt-8  flex '> </form>

      <label htmlFor="" className='ml-6'>Nombre Completo</label> <br />
      <input type="text" className='border-1px border ml-6 w-[90%] rounded mt-5 h-9 focus:border-[green]' /> <br /> <br />

      <label htmlFor="" className='ml-6 '>Email</label> 
      <input type="text" className='border-1px border ml-6 w-[90%] rounded mt-5  h-9' /> <br /><br />

      <label htmlFor="" className='ml-6  '>Teléfono</label> 

      <div className='border-[1px]  border-[gray] w-[90%] ml-6 rounded  h-9 flex mt-4 '>

        <select name="" id="" className='border-[0px] outline-none  ml-1'>
        
            <option value="UK">UK</option>
            <option value="UK">Spain</option>
            <option value="UK">England</option>
            
        </select>

        <input type="text" className=' border-none outline-none'/>
      </div>    
      <div className='flex flex-col items-start '>

        <textarea className='border-2 ml-6 mt-6 w-[90%] rounded h-[110px]'  placeholder='Dejanos tus comentarios'  >

        </textarea>
      </div>
      <div className='flex  items-center gap-3 mt-6'>

        <input type='checkbox' className='ml-6 x'  ></input>
        <span>Acepto</span>  <Link className='underline' to={''}>Politica de Privacidad</Link> <span>y los </span>
        <Link className='underline' to={''}>Terminos y condiciones</Link>


      </div>
      <button className='px-4 py-2 text-[white] font-medium border-[1px] ml-6 rounded mt-2 bg-[green]'>Enviar</button>

    </div>
  )
}

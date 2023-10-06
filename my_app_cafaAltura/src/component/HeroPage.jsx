import hero from "../assets/imagenes/Hero image.png";



export const HeroPage = () => {
  // const [oscar, setOscar] = useState(false)

  // const patata = () => {
  //   setOscar(true)
  //   console.log(oscar);
  // }

  // console.log(oscar);
  return (

    <div className='flex h-[486px] border-[1px] items-center justify-evenly'>

      <div className='flex flex-col  w-[588px] h-[232px] leading-6'>
        <span className='text-sm text-[#2A5B45] font-semibold'>  De la planta a tu taza </span>

        <span className='text-[#000000] font-semibold text-4xl mt-[10px] '>El mejor café del mundo, ahora en tu casa.</span>

        <span className=' font-normal leading-4 text-[14px] mt-[10px]'> Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.</span>

        <div className='mt-[15px] flex gap-[16px]'>

         

        </div>

      </div>

      <div className='flex w-[588px]'>

        <img src={hero} alt="" />
        

      </div>


    </div>
  )
}

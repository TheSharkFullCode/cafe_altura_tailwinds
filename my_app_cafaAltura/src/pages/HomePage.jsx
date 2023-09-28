import React from 'react'

import { HeroPage } from '../component/HeroPage'
import { Seccion3 } from './Seccion3'
import Seccionproductos from '../component/Seccionproductos'
import { Componentproduct } from '../component/Componentproduct'

const HomePage = () => {

  return (
      <>
        <HeroPage/>
        <Seccion3/>
        <Seccionproductos/>
        <Componentproduct/>
        
      </>

      
  )
}

export default HomePage
import React from 'react'

import { HeroPage } from '../component/HeroPage'
import { Seccion3 } from './Seccion3'
import { Componentproduct } from '../component/Componentproduct'
import { SeccionFaQ } from './SeccionFaQ'
import Coffestar from '../component/Seccion6_Sala_star/Coffestar'
import { Formulary } from '../component/Seccion_Formulario/Formulary'

const HomePage = () => {

  return (

      <>
        <HeroPage/>
        <Seccion3/>
        <Componentproduct number={4}/>
        <SeccionFaQ/>
        <Coffestar/>
        <Formulary/>
      </>

      
  )
}

export default HomePage
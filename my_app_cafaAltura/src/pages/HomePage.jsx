import React from 'react'

import { HeroPage } from '../component/HeroPage'
import { Seccion3 } from './Seccion3'
import { Componentproduct } from '../component/Componentproduct'
import { SeccionFaQ } from './SeccionFaQ'

const HomePage = () => {

  return (

      <>
        <HeroPage/>
        <Seccion3/>
        <Componentproduct number={4}/>
        <SeccionFaQ/>
      </>

      
  )
}

export default HomePage
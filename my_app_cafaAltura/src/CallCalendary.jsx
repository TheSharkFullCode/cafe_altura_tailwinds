import React, { useState } from 'react'
import Calendar from "react-calendar";




export const CallCalendary = () => {


    const [value,onChange] = useState(new Date())

  return (
        <>
        <Calendar onChange={onChange} value={value} formatLongDate={(locale,date)=>{const options = {year: 'numeric',month:'long',day:'numeric'};
    return new Intl.DateTimeFormat(locale,options).format(date)}}  >  
        
        
         </Calendar>
        </>

  )
}

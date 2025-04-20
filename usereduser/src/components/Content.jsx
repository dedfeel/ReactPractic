import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'
let audarmalar ={
    en: "Hello",
    kz: 'Сәлем',
    ru: 'Привет'
}

export default function Content() {
    let {state} = useContext(LanguageContext)
  return (
    <div>
        Аударма: {audarmalar[state.language]}
      
    </div>
  )
}
  
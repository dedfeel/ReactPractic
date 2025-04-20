import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'

export default function Imput() {
    let { dispatch } = useContext(LanguageContext)
  return (
    <div>
      <select onChange={(e)=>dispatch({type: 'til_austyr', payload: e.target.value})}>
        <option value="en">English</option>
        <option value="kz">Kazakh</option>
        <option value="ru">Rus</option>

      </select>
    </div>
  )
}

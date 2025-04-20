import React, { useReducer } from 'react'
import Content from './components/Content'
import LanguageSwicher from './components/LanguageSwicher'
import LanguageContext from './components/LanguageContext'

let initialState = {
  language: 'en'
}

function reduser(state, action){
  switch(action.type){
    case 'til_austyr':
      return{
        language: action.payload
      }

      
    default:
      return state  
  }
}


export default function App() {
  let [state, dispatch] = useReducer(reduser, initialState )
  return (
    
    <div>
    <LanguageContext.Provider value={{state, dispatch}}>
        <LanguageSwicher/>
        <Content/>
    </LanguageContext.Provider>
     
    </div>
  )
}

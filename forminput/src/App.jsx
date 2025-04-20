import React, { useState } from 'react'
import './App.css'



function App() {

  let[name, setName] = useState()
  let[email, setEmail] = useState()
  let[nomer, setNomer] = useState()
  let[password, setPassword] = useState()
  let[addPassword, setAddPasword] = useState()
  let[error, setError] = useState()




  return (
    <>
     <h1>Реакт арқылы Тіркеу Формасы</h1>
     <form action="">
        <input type="text"
        placeholder='name' 
        required
        onChange={(e)=>setName(e.target.value)}/>

        <input type="text"
        placeholder='email'
        required
        onChange={(e)=>setEmail(e.target.value)}/>

        <input type="number"
        placeholder='nomer'
        required 
        onChange={(e)=>setNomer(e.target.value)}/>

        <input type="password"
          placeholder='password'
          required 
          onChange={(e)=>setPassword(e.target.value)}/>

        <input type="text"
        placeholder='password'
        required
        onChange={(e)=>setAddPasword(e.target.value)}/>


     </form>

      
    </>
  )
}

export default App

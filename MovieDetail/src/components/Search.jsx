import axios from 'axios'
import React, { useState } from 'react'
import '../index.css'

export default function Search({onSearch}) {

    const[filmInput, setFilmInput]= useState('')
    const[isLoading, setIsLoading]= useState(false)
    const handleSearch = async (e)=>{
        e.preventDefault()
        setIsLoading(true)
        try{
            let response = await axios.get(`https://www.omdbapi.com/?apikey=17dec6d0&s=${filmInput}`)
            
            if(response.data.Response == 'True'){
                onSearch(response.data.Search)
                setIsLoading(false)
                setFilmInput('')
            }else{
                onSearch([])
                setIsLoading(false)
                setFilmInput('')
            }
        }catch(err){
            console.error(err);
            
        }

    }
  return (

    <div>
        <h1>Movie Search App</h1>
        <form className='form' onSubmit={handleSearch}>
            <input  type="text" 
            placeholder='Искать фильм...'
            value={filmInput}
            className='inp'

            onChange={(e)=>setFilmInput(e.target.value)}

            />
            <button 
            className='btn'
            type='submit'
            disabled={isLoading}
            >
                {isLoading ? "ищем..." : 'Искать'}</button>
        </form>
      
    </div>
  )
}

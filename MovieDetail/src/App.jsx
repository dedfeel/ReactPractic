import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Moviedetail from './pages/Moviedetail'
import MovieList from './components/MovieList'
import Search from './components/Search'

function App() {
  const[movies, setMovies] = useState([])
  console.log(movies);
  

  return (
    <>
      <BrowserRouter>
        <Search onSearch={setMovies}/>
        <Routes>
          <Route path='/' element={<MovieList movies={movies}/>}/>
          <Route path='/movies/:id' element={<Moviedetail/>}/> 

        </Routes> 
      </BrowserRouter>
      
    </>
  )
}

export default App

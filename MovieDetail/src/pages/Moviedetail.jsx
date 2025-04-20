import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../index.css'

export default function Moviedetail() {
  let { id }  = useParams()

  const[movie, setMovie] = useState({})
  let[isLoading, setIsLoading]= useState(true)
  let[error,setError] = useState('')

  async function fetchData() {
    try{
      let response = await axios.get(`https://www.omdbapi.com/?apikey=17dec6d0&i=${id}&plot=full` ) 
      if(response.data.Response == "True" ){
        setIsLoading(false)
        setMovie(response.data)
      }     

    }catch(err){
      setError(err.message)
      setIsLoading(false)
      console.error(err.message);
    }
  }

  useEffect(()=>{
    fetchData()

  },[id])

  if(isLoading) return <p>Загрузка...</p>
  if(error) return <p style={{color: "red"}}>{error}</p>

  return (
    <div className='section'>
        <div className='sectinDiv1'>
          <img className='sectionImg' src={movie.Poster == "N/A" ? 'https://t3.ftcdn.net/jpg/08/30/64/70/360_F_830647061_m02NGMtYotrjinuMU9RcAMuijUZX1k07.jpg' : movie.Poster} alt="film-img" />

        </div>    
        <div className='sectionDiv2'>
          
            <h1>{movie.Title}<span> ({movie.Year})</span></h1>
            <ul className='sectionUl'>
                <li>Рейтинг: {movie.imdbRating}</li>
                <li>{movie.Runtime}</li>
                <li>Можно посмотреть в:  {movie.Rated}</li>
            </ul>
            <p className='sectionP'>{movie.Plot}</p>
            <div className='section2'>
                <div>
                    <h3>Режисер</h3>
                    <p>{movie.Writer}</p>
                </div>
                <div>
                    <h3>Актеры</h3>
                    <p>{movie.Actors}</p>
                </div>
                <div>
                    <h3>Жанр</h3>
                    <p>{movie.Genre}</p>
                </div>
            </div>
             <div >
                <Link className='section3' to={'/'}>
                    -Вернуться назад
                </Link>
            </div> 
        </div>  
       
    </div>
  )
}

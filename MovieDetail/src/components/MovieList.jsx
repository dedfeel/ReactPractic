import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default function MovieList({movies}) {
  return (
    <div  className='container'>
        {movies.length>0 ?
                movies.map((film)=>{
                    return(
                        <Link  to={`/movies/${film.imdbID}`} key={film.imdbID}>
                            <div className='filmBox'>
                                <img 
                                    className='img'
                                    src={film.Poster =="N/A" ? "https://t3.ftcdn.net/jpg/08/30/64/70/360_F_830647061_m02NGMtYotrjinuMU9RcAMuijUZX1k07.jpg": film.Poster  }
                                    alt="filmimg" />
                                    <h3 className='filmTitle'>{film.Title}</h3>
                                <div className='box'>
                                    <p>{film.Year}</p>
                                    <span>*</span>
                                    <p>{film.Type == "movie" ? "Фильм" : 'Сериал'}</p>
                                </div>
                            </div>
                        </Link>
                        
                    )
                })
            :
            <p> Фильм не найден, напишите запрос</p>
        }

    </div>
  )
}

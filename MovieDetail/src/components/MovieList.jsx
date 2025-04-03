import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default function MovieList({movies}) {
  return (
    <div  className='container'>
        {movies.length>0 ?
                movies.map((film)=>{
                    return(
                        <Link  to={`/movies/{}`} key={film.imdbID}>
                            <div className='filmBox'>
                                <img 
                                    className='img'
                                    src={film.Poster ? film.Poster : "https://t3.ftcdn.net/jpg/08/30/64/70/360_F_830647061_m02NGMtYotrjinuMU9RcAMuijUZX1k07.jpg"}
                                    alt="filmimg" />
                                <div className='box'>
                                    <p>{film.Title}</p>
                                    <span>*</span>
                                    <p>{film.Year}</p>
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

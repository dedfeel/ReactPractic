import React, { useContext } from 'react'
import FlightContext from '../components/FlightContext'
import { Link, useNavigate } from 'react-router-dom';

export default function FlightList() {
    let  {FlightTicked} = useContext (FlightContext)
    console.log(FlightTicked);
    
  return (
    <div>
        <h1>Ұшақ рейстері</h1>
        
        {FlightTicked.map((ticked, id)=>{
            return <div key={id} style={{border: "1px solid green", padding: '50px 300px', marginTop: '50px', borderRadius: '300px'} }>

                <h1>{ticked.from}-{ticked.to}</h1>
                <p>Уақыты:{ticked.time}</p>
                <p>Авиакомпания:{ticked.airline}</p>
                <p>Қалған орын:{ticked.seats}</p>
                <p>Уақыты:{ticked.time}</p>
                <h2 style={{color: 'green'}}>{ticked.price}</h2>
                <Link to={`/booking/${ticked.id}`}>Брондау</Link>

                </div>
            
            
        })}

      
    </div>
  )
}

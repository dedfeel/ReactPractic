import React, { useContext } from 'react'
import FlightContext from '../components/FlightContext'
import { useParams } from 'react-router-dom'

export default function FlightBooking() {
    let {id} = useParams()
    let { FlightTicked} = useContext(FlightContext)

    let list = FlightTicked.find(reis=> reis.id == id )

    console.log(list);
    
  return (
    <div>
        <h1>Бронировать</h1>
        <div style={{display: 'flex', alignItems: 'center', gap: '50px'}}>
            <div>
                <h1>{list.from}🛫{list.to}</h1>
                <p>Уақыты:{list.time}</p>
                <p>Авиакомпания:{list.airline}</p>
                <p>Қалған орын:{list.seats}</p>
                <p>Уақыты:{list.time}</p>
                <h2 style={{color: 'green'}}>{list.price}</h2>
            </div>
            <form style={{display: 'flex', flexDirection: 'column', gap: '20px'} }>
                <label htmlFor="">ФИО пассажира</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Даа вылета:</label>
                <input type="date" />
                <label htmlFor="">Место:</label>
                <select >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <button style={{color: 'green'}}>Бронировать</button>
            </form>
            
        </div>

            
    

      
    </div>
  )
}

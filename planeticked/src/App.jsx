import React, { useState } from 'react'
import './App.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import FlightContext from './components/FlightContext' 
import FlightList from './pages/FlightList'
import FlightBooking from './pages/FlightBooking'


function App() {

  let FlightTicked = [
    {id:1, from:"Almaty", to:"Astana", price:25000, time: "10:00", airline: "Air Astana", seats: 50},
    {id:2, from:"Almaty", to:"Madrid", price:30000, time: "14:40", airline: "Qazaq Air", seats: 45},
    {id:3, from:"Astana", to:"Almaty", price:28000, time: "17:00", airline: "SCAT", seats: 55 },
  ]

  let[flights, setFlight]= useState([])
  let[bookings, serBookings] = useState([])
  

  return (
      <div>
        
          <FlightContext.Provider value={{FlightTicked, flights, setFlight,
              bookings, serBookings}} >
          <BrowserRouter>
            <Routes>
  
              <Route path='/' element={<FlightList/>} />
              <Route path='/booking/:id' element={<FlightBooking/>}/>
            </Routes>
          </BrowserRouter>
  
          </FlightContext.Provider>
  
        
      </div>
    )
}

export default App

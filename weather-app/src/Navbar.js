import React from 'react'
import { useState } from 'react'
import './App.css';

//rafce

const Navbar = () => {
    const [city, setCity] = useState("Algiers")
    console.log(city)
    //fetch localisation with usefetch using API
    //This allows a Web site or app to offer customized results based on the user's location
    //geo = navigator.geolocation
    //geo.getCurrentPosition((success, error, [options])
    //convert it to city name
    //if localisation not fetchable=> five chart Algiers by default
    //give localisation to chart in home
  return (
    <div className='navbar'>
        <h2>Your city:</h2>
        <input
        value={city}
        type="text"
        onChange={(e)=> setCity(e.target.value)}
        />
    </div>
  )
}


export default Navbar
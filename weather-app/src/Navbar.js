import React from 'react'
import { useState } from 'react'
import './App.css';

//rafce

const Navbar = () => {
    const [city, setCity] = useState("Algiers")
    
    //fetch localisation with usefetch using API
    //This allows a Web site or app to offer customized results based on the user's location
    
    function success(pos) {
      const latitude  = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      console.log(latitude)
      console.log(longitude)
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success,error);
    //get the city from the coordinates

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
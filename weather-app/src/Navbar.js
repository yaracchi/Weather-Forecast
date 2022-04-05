import React from 'react'
import { useState } from 'react'
import './App.css';
import useFetch from './useFetch'
//rafce

const Navbar = () => {
    const [city, setCity] = useState("Algiers")
    
    //fetch localisation  
    function getLocation() {
      const showLocation= (pos)=> {
        const latitude  = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        console.log(latitude)//*******this is printing the value last in console */
      }
      const errorHandler = (err)=> {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      if(navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
      } else {
         alert("Sorry, browser does not support geolocation!");
      }
      console.log(showLocation.latitude)//this is printed undefined 1st
      return showLocation.latitude
   }
   const lat = getLocation()
   console.log(lat)//*******this is printed undefined 2nd in console */

    //get the city from the coordinates
    //const url = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${success.latitude},${success.longitude}&sensor=false`
    //const url = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+loc.latitude+","+loc.longitude+"&sensor=false"
    //console.log(url)
    //const {data, isLoading, erro } = useFetch(url)
    //console.log(data)
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
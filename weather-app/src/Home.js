//rafce
import React from 'react'
import Chart from './Chart';
import Card from './Card';
import './App.css';

const Home = () => {
  return (
    <div className='home' >
        <div className='informative-card'>
            <Card/>
        </div> 
        <div className='weather-daily' >
            <Chart/>
            <Card/>
        </div>
    </div>
  )
}

export default Home
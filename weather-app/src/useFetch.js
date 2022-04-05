 //Fetch weather data (forecast data and current weather data) 
  //of the location from weather API
import { useState, useEffect } from "react"

const useFetch = (url) => {
const [data, setData] = useState(null)
const [error, setError] = useState(null)
const [isLoading, setIsLoading] = useState(true)

useEffect(
  fetch(url)
  .then(res => { 
    if (!res.ok){
      throw Error('Couldnt fetch the data from this ressource')
    }
    console.log("in use fetch")
    return res.json()

  })
  .then( (data)=>{
    setData(data)
    setIsLoading(false)
    setError(null)
  }
  )
  .catch(err =>{
         setError(err.message)
         setError(false)
  })

  ,[url])


return {data,isLoading,error}
}
export default useFetch
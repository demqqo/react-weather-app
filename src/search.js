import React, {useState} from "react"
import "./App.css"
import Main from "./main"
import axios from "axios"
export default function Search(props){
    
    const [lat, setLat] = useState(65)
    const [lon, setLon] = useState(45)
    const [city2, setCity2] = useState(" toronto ")

  let key = "AIzaSyA6AGrPnASatY4WeXcV84lG2k9eycEBYt4"
  let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&sensor=true&key=${key}`
  
  
  
    let [city, setCity] = useState(props.city) 
    let [city1, setCity1] = useState(props.city)
    console.log(city + 11)
    
    const handleSubmit=(e)=>{
        
        
        
        e.preventDefault();
        
        if(city1){
        setCity(city1)}else{
            alert("Enter a city)")
        }
    }
    const handleCurent=(e)=>{
        e.preventDefault();
        
        
        getLocation()

function getLocation() {
    function showPosition(position) {
    setLat(position.coords.latitude) 
    setLon(position.coords.longitude)
    
    axios.get(url).then(function(response){console.log(1)
setCity2(response.data.plus_code.compound_code);
if(city2){
setCity((city2).split(" ")[1])}})
  }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
     alert("Geolocation is not supported by this browser.");
    }
  }

    }
    
    return(
        <div className="flex-container" >
            <form onSubmit={handleSubmit}>
                <input className="search-box initial" type="text" placeholder="Enter a city"  onChange = {(e)=>setCity1(e.target.value)  }/>
            <input className="submit-button none" type="submit" value="Search" onSubmit={handleSubmit}/>
            </form><button className="current-button none" type="button" value="Current" onClick={handleCurent}>Current</button>
        <Main city={city}/></div>
      
    )
}
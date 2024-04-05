import React, {useState} from "react"
import axios from "axios"

export default function Main(props){
    const[city,setCity] =useState(" ")
    const [temperature, setTemperature] = useState(" ")
    const [humidity, setHumidity] = useState(" ")
    const [precipitation, setPrecipitation] = useState(" ")
    const [date, setDate] = useState(" ")
    const [imgurl, setImgurl] = useState(" ");
    let key = `baf054037a66413c8db15210241703`
    
let URL = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${props.city}`
axios.get(`${URL}`).then(function (response){
    setImgurl(response.data.current.condition.icon);
    setPrecipitation(`precipitation: ${Math.round(response.data.current.precip_mm)} mm`);
    setHumidity(`Humidity: ${response.data.current.humidity}%`);
    setTemperature(`${Math.round(response.data.current.temp_c)}°C`);
    setDate(response.data.location.localtime_epoch)
    console.log(Date(date))
    
})
    return(
        <div>
            <div className="flex-container">
                <ul><li><h1>{props.city} {temperature}</h1></li>
                <li>Wednesday 14:26</li>
                <li>Clear</li></ul>
            </div>
            <div className="flex-container">
                <img className="main-degree" alt="degree"/>
                <ul>
                <li>Precipitation: {precipitation}</li><li>Wind: 4km/h</li>

                </ul>

            </div>
            
        </div>
        
    )
}
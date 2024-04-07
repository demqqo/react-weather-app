import React, {useState} from "react"
import axios from "axios"
import moment from 'moment';

export default function Main(props){
    const[city,setCity] =useState(" ")
    const [temperature, setTemperature] = useState(" ")
    const [condition, setCondition] = useState(" ")
    const [precipitation, setPrecipitation] = useState(" ")
    const [date, setDate] = useState(" ")
    const [imgurl, setImgurl] = useState(" ");
    const [wind, setWind] = useState(" ")
    const [hour, setHour] = useState(" ")
    const [day, setDay] = useState(" ")
    let key = `baf054037a66413c8db15210241703`
    
let URL = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${props.city}`
console.log(URL)
axios.get(`${URL}`).then(function (response){
    setImgurl(response.data.current.condition.icon);
    setPrecipitation(`${Math.round(response.data.current.precip_mm)} mm`);
    setWind(`${Math.round(response.data.current.wind_kph)}`)
    setTemperature(`${Math.round(response.data.current.temp_c)}°C`);
    setCondition(response.data.current.condition.text)
    console.log(response.data)
   setDate(response.data.location.localtime)
   setCity(response.data.location.name)
   var day = moment("2024-04-06").day(); // for the number
   day = moment("2024-04-06").format('dddd'); // for the word
   setDay(day)
   let example = response.data.location.localtime;
setHour(example.substring(example.lastIndexOf(" ") + 1));
})
    return(
        <div>
            <div className="flex-container">
                <ul><li><h1>{city} {temperature}</h1></li>
                <li>{hour} {day}</li>
                <li>{condition}</li></ul>
            </div>
            <div className="flex-container">
                <img className="main-degree" alt="degree" src={imgurl}/>
                <ul>
                <li>Precipitation: {precipitation}</li><li>Wind: {wind}km/h</li>

                </ul>

            </div>
            <Otherdays city={city}/>
            
        </div>
        
    )
}
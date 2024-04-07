import React, {useState} from "react"
import axios from "axios"
import moment from "moment"
export default function Otherdays(props){
let key=`baf054037a66413c8db15210241703`
let url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${props.city}&days=3`
const [temp1, setTemp1] = useState(" ")
const [temp2, setTemp2] = useState(" ")
const [temp3, setTemp3] = useState(" ")
const [day1, setDay1] = useState(" ")
const [day2, setDay2] = useState(" ")
const [day3, setDay3] = useState(" ")
const [img1, setImg1] = useState(" ")
const [img2, setImg2] = useState(" ")
const [img3, setImg3] = useState(" ")


axios.get(`${url}`).then(function(response){
    
        setTemp1(Math.round(response.data.forecast.forecastday[0].day.maxtemp_c) + "°C")
        setTemp2(Math.round(response.data.forecast.forecastday[1].day.maxtemp_c)  + "°C")
        setTemp3(Math.round(response.data.forecast.forecastday[2].day.maxtemp_c)  + "°C")
        setDay1(moment(response.data.forecast.forecastday[0].date).format('dddd'))
        setDay2(moment(response.data.forecast.forecastday[1].date).format('dddd'))
        setDay3(moment(response.data.forecast.forecastday[2].date).format('dddd'))
        setImg1(response.data.forecast.forecastday[0].day.condition.icon)
        setImg2(response.data.forecast.forecastday[1].day.condition.icon)
        setImg3(response.data.forecast.forecastday[2].day.condition.icon)
        
        
        
})
    return(<div>
        <ul className="flex-container">
        <li className="auto"><div className="other-days"> 
            <div className="day">{day1}</div>
            <img src={img1}/>
            <div className="degree">{temp1}</div>
            </div></li>
        <li className="auto"><div className="other-days"> 
            <div className="day">{day2}</div>
            <img src={img2}/>
            <div className="degree">{temp2}</div>
            </div></li>
        <li className="auto"><div className="other-days"> 
            <div className="day">{day3}</div>
            <img src={img3}/>
            <div className="degree">{temp3}</div>
            </div></li>
        </ul>
    </div>)
}
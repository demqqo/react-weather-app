import React from "react"

export default function Otherdays(){
    return(<div>
        <ul className="flex-container">
        <li><div className="other-days auto"> 
            <div className="day">Mon</div>
            <img/>
            <div className="degree">31°C</div>
            </div></li>
        <li><div className="other-days auto"> 
            <div className="day">Tue</div>
            <img/>
            <div className="degree">3°C</div>
            </div></li>
        <li><div className="other-days auto"> 
            <div className="day">Wed</div>
            <img/>
            <div className="degree">3°C</div>
            </div></li>
        <li><div className="other-days auto"> 
            <div className="day">Thu</div>
            <img/>
            <div className="degree">3°C</div>
            </div></li>
        <li><div className="other-days auto">
            <div className="day">Fri</div>
            <img/>
            <div className="degree">3°C</div>
            </div></li>
        </ul>
    </div>)
}
import React from "react"

export default function Main(){
    return(
        <div>
            <div className="flex-container">
                <ul><li><h1>Lisbon</h1></li>
                <li>Wednesday 14:26</li>
                <li>Clear</li></ul>
            </div>
            <div className="flex-container">
                <img className="main-degree" alt="degree"/>
                <ul>
                <li>Precipitation: 86%</li><li>Wind: 4km/h</li>

                </ul>

            </div>
            
        </div>
        
    )
}
import React from "react"
import "./App.css"
export default function Search(){
    return(
        <div >
            <ul className="flex-container">
        <li><input className="search-box initial" type="text" placeholder="Enter a city"/></li>

        <li><input className="submit-button none" type="button" value="Search"/></li>
        <li><input className="current-button none" type="button" value="Current"/></li>
        </ul></div>
    )
}
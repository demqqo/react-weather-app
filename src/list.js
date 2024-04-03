import React from "react" 
import "./App.css"
export default function List(){
    return(
        <div>
        <ul className="flex-container">
            <li className="item initial"><a href="#">Lisbon</a></li>
            <li className="item none"><a href="#">Paris</a></li>
            <li className="item none"><a href="#">Sydney</a></li>
            <li className="item none"><a href="#">San Francisco</a></li>
        </ul></div>
    )
}
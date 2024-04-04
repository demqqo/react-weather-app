import React, {useState} from "react"
import "./App.css"
import Main from "./main"
export default function Search(props){
    let [city, setCity] = useState(` `) 
    let [city1, setCity1] = useState(` `)
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        setCity(city1)
        
console.log(city)
    }
    return(
        <div className="flex-container" >
            <form onSubmit={handleSubmit}>
                <input className="search-box initial" type="text" placeholder="Enter a city" onChange = {(e)=>setCity1(e.target.value)}/>
            <input className="submit-button none" type="submit" value="Search" onSubmit={handleSubmit}/>
            <input className="current-button none" type="button" value="Current"/></form>
       <Main city={city}/> </div>
    )
}
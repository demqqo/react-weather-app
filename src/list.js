import React , {useState}from "react" 
import "./App.css"
import Search from "./search"
import Main from "./main"

export default function List(props){
    let [city,setCity] = useState(` `)
    let [city1,setCity1] = useState(props.city)
    const handleSubmit=(e)=>{
e.preventDefault();
setCity1(city)
console.log(city)
    }
    
    return(
        <div>
        <div className="flex-container list" >
        <form onSubmit={ handleSubmit}>
            <input className="item initial" type="submit" value="Lisbon" onClick = { (e) => setCity(e.target.value)} />
            <input className="item none" type="submit" value="Paris"onClick = { (e) => setCity(e.target.value)} />
            <input className="item none" type="submit" value="Sydney"onClick = { (e) => setCity(e.target.value)} />
            <input className="item none" type="submit"value="San Francisco"onClick = { (e) => setCity(e.target.value)} /></form>
            
            </div><Search city={city1} key={city1}/>
        </div>
    )
}
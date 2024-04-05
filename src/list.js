import React , {useState}from "react" 
import "./App.css"
import Search from "./search"

export default function List(){
    let [city,setCity] = useState(` `)
    function handleSubmit(e){
e.preventDefault();
setCity(e)
console.log(city)
    }
    return(
        <div className="flex-container list" >
        <form onSubmit={ handleSubmit}>
            <input className="item initial" type="submit" value="Lisbon" onClick = { (e) => setCity(e.target.value)} />
            <input className="item none" type="submit" value="Paris"onClick = { (e) => setCity(e.target.value)} />
            <input className="item none" type="submit" value="Sydney"onClick = { (e) => setCity(e.target.value)} />
            <input className="item none" type="submit"value="San Francisco"onClick = { (e) => setCity(e.target.value)} /></form>
            {/*<Search city={city}/>*/}
        </div>
    )
}
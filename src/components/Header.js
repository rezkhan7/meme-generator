import React from "react"
import * as style from "../style.css"

let Header = ()=>{
    return(
        <header className = "header">
            <img src = "./images/troll-face.png" 
            className = "header--image"/>
            <h2 className = "header--title">MemeGenerator</h2>
            <h3 className = "header--message">Welcome, Memers!</h3>
        </header>
    )
}


export default Header
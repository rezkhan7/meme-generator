import React from "react"
import * as style from "../style.css"

let Meme = ()=>{
    return(
        <main>
            <form className = "form">
                <input type = "text" className = "form--input" placeholder="Top Text"></input>
                <input type = "text" className = "form--input" placeholder="Bottom Text"></input>
                <button className = "form--button">Get a new meme image 🖼</button>
            </form>

        </main>
    )
}

export default Meme


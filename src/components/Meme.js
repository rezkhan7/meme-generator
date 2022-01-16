import React from "react"
import  memesData from "../memesData.js"
import * as style from "../style.css"

let Meme = ()=>{
    const [imgSrc, setImgSrc] = React.useState("")
    
    let getMemeImage = ()=>{
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random()* memesArray.length)
       setImgSrc(memesArray[randomNumber].url)
        
     
    }
    return(
        <main>
            <div className = "form">
                <input type = "text" className = "form--input" placeholder="Top Text"></input>
                <input type = "text" className = "form--input" placeholder="Bottom Text"></input>
                <button className = "form--button" onClick = {getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src = {imgSrc}></img>
        </main>
    )
}

export default Meme


import React from "react"
import  memesData from "../memesData.js"
import * as style from "../style.css"

let Meme = ()=>{
   // const [imgSrc, setImgSrc] = React.useState("http://i.imgflip.com/1bij.jpg")
   const [meme, setMeme] = React.useState({
       topText:"",
       bottomText:"",
       randomImage: "http://i.imgflip.com/1bij.jpg" 
   })

   const [allMemesData, setAllMemesData] = React.useState(memesData)
    
    let getMemeImage = ()=>{
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random()* memesArray.length)
        const url =  memesArray[randomNumber].url      
        setMeme((prevState)=>{
            return{
                ...meme,
                randomImage: url
            }
        })
    
     
    }
    return(
        <main>
            <div className = "form">
                <input type = "text" className = "form--input" placeholder="Top Text"></input>
                <input type = "text" className = "form--input" placeholder="Bottom Text"></input>
                <button className = "form--button" onClick = {getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src = {meme.randomImage} className = "meme--image"></img>
        </main>
    )
}

export default Meme


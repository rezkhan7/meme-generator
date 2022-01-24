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

    let handleChange = (event)=>{
        const{name, value} = event.target
        setMeme((prevState)=>{
            
            return{
                ...prevState,
                [name]:value
            }
        })
    }
    
    return(
        <main>
            <div className = "form">
                <input 
                type = "text" 
                className = "form--input" 
                placeholder="Top Text"
                name = "topText"
                value = {meme.topText}
                onChange = {handleChange}
                />

               
                <input 
                type = "text" 
                className = "form--input" 
                placeholder="Bottom Text"
                name = "bottomText"
                value = {meme.bottomText}
                onChange = {handleChange}
                />

                <button className = "form--button" onClick = {getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme


import React from "react"
import Header from "./components/Header.js"
import Meme from "./components/Meme.js"
import * as style from "./style.css"

let App = ()=>{
    return(
        <div>
            <Header/>
            <Meme/>
        </div>
    )
}

export default App
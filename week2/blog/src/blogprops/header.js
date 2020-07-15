import React from "react"
import Navbar from "./navbar"

function App() {
    return (
        <div style = {{width:"100vw", height:"30vw", background:"gray", verticalAlign:"center", flexDirection:"column", color:"white", display:"flex"}}> 
            <Navbar/>
            <h1 style = {{fontSize:"80px", marginBottom:"-6px"}}>Clean Blog</h1>
            <h4 style = {{color:"white"}}>A Blog Theme by Start Bootstrap</h4>
           
        </div>
    )
    
    }
    export default App
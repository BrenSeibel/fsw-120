import React from "react"

function App(props) {
    return (
        <div>
            
            <h1>{props.title}</h1>

            <h2>{props.subtitle}</h2>

            <h4>{props.author} {props.date}</h4>

            {/* <h4>{props.date}</h4> */}
         
            
        </div>
    )
    }

    export default App
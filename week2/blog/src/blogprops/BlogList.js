import React from "react"
import data from "./blogprops"
import BlogPost from "./blogfile"


function BlogList() {
    return (
        <div style = {{display:"flex", justifyContent:"center", background:"white" }}>

        
        <div style = {{display:"flex", flexDirection:"column", width:"50%", alignItems:"center", textAlign:"left" }}>
             {data.map((post, i) => {return (<BlogPost title = {post.title} 
             subtitle = {post.subTitle}
             author = {post.author}
             date = {post.date}


             key = {i}/>)})}
             <div style = {{display: "flex", justifyContent:"right", width:"100%", textAlign:"right"}}> 
                 <span style = {{marginLeft:"600px", padding:"10px", textAlign:"center", background:"rgb(6, 86, 161)", color:"white", fontFamily: "Open Sans, sans-serif"}}> OLDER POSTS </span>
            </div>
        </div>
        </div>
    )
    
    }
    export default BlogList
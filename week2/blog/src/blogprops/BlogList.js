import React from "react"
import data from "./blogprops"
import BlogPost from "./blogfile"


function BlogList() {
    return (
        <div>
             {data.map((post, i) => {return (<BlogPost title = {post.title} 
             subtitle = {post.subTitle}
             author = {post.author}
             date = {post.date}


             key = {i}/>)})}
        </div>
    )
    
    }
    export default BlogList
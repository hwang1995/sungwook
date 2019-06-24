import React from 'react'
import {Redirect} from 'react-router-dom'
const Posts = ({match}) => {
    // let url = `/post/${match.params.postID}.md`
    let postID = match.params.postID
    let category = match.params.category
    let postExist = true
    
    if(postID == null || category == null) {
        postExist = false
    }
    return (
        <div>
            
            {postExist ? (`/posts/${category}/${postID}.md`) : (<Redirect to ="/404"/>)}
            <h1>{category} {postID}</h1>
        </div>
    )
}


export default Posts;
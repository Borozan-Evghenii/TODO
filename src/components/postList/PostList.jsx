import React from 'react'
import style from './PostList.module.css'
import PostItem from '../postItem/PostItem'

export default function PostList({posts}) {
  return (
    <div className={style.postList}> 
      {
        posts.map((post)=>(
          <PostItem key={post._id}>{post.body}</PostItem>
        ))
      }
    </div>
  )
}

import React from 'react'
import PostItem from '../postItem/PostItem'
import style from './PostList.module.css'

export default function PostList() {
  return (
    <div className={style.postListContainer}>
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
    </div>
  )
}

import React from 'react'
import style from './PostItem.module.css'

export default function PostItem({children}) {
  return (
    <div className={style.postItem}>
      <input type="checkbox" name="" id="checkbox" />
      <label htmlFor="checkbox">{children}</label>
    </div>
  )
}

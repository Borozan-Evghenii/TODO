import React from 'react'
import style from './PostItem.module.css'

export default function PostItem() {
  return (
    <div className={style.item}>
      <i className={style.circle} ></i>
      <p className={style.itemContent}>Create React App</p>
    </div>
  )
}

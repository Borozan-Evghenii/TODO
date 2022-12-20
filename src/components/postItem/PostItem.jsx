import React from 'react'
import style from './PostItem.module.css'

export default function PostItem({children, taskCompleted, completedTask, taskId}) {
  return (
    <div
    onClick={()=>completedTask(taskId)} 
    className={style.item}>
      <i className={`${style.circle} ${taskCompleted ? style.completed :''} `}></i>
      <p className={`${style.itemContent} ${taskCompleted ? style.textCompleted :''}`}>{children}</p>
    </div>
  )
}

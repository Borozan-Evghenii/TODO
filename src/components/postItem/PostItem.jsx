import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import style from './PostItem.module.css'

export default function PostItem({children, taskCompleted, completedTask, taskId, removeTask}) {
  return (
    <div className={style.item}>
      <div className={style.itemCont} onClick={()=>completedTask(taskId)}>
        <i className={`${style.circle} ${taskCompleted ? style.completed :''} `}></i>
        <p className={`${style.itemContent} ${taskCompleted ? style.textCompleted : ''}`}>{children}</p>
      </div>
      <div onClick={(e)=>{removeTask(taskId)}}>
        <AiOutlineCloseCircle className={style.icon} />
      </div>
    </div>
  )
}

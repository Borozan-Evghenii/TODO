import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import style from './ToDo.module.css'

export default function ToDo({todo, toggleTask, removeTask}) {
  return (
    <div key={todo.id} className={style.itemContainer}>
      <h3 className={todo.completed ? 'completed' : '' } 
        onClick={()=>toggleTask(todo.id)}
        >
          {todo.title}
      </h3>
      <div 
        className={style.close} 
        onClick={()=> removeTask(todo.id)}>
          <AiOutlineCloseCircle/>
      </div>
    </div>
  )
}

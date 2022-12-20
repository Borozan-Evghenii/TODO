import React from 'react'
import PostItem from '../postItem/PostItem'
import style from './PostList.module.css'

export default function PostList({tasks, completedTask, removeTask}) {
  return (
    <div className={style.postListContainer}>
      {
        tasks.map((task)=>
          <PostItem 
            completedTask={completedTask}
            key={task.id} 
            taskId={task.id}
            removeTask={removeTask}
            taskCompleted={task.completed}>
              {task.task}
          </PostItem>
        )
      }
    </div>
  )
}

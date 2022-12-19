import React, { useState, useEffect} from 'react'
import style from './Header.module.css'

export default function Header({ children, tasks }) {
  const [completedCount, setCompletedCount] = useState([])
  useEffect(() => {
    setCompletedCount([...tasks.filter((task)=> task.completed === true)])
  }, [tasks])


  


  return (
    <header className={style.header}>
      <div className={style.content}>
        <div>
          <h1 className={style.h1}>{children}</h1>
        </div>
        <div>
          <span className={style.count}>{`(  ${completedCount.length} / ${tasks.length} )`}</span>
        </div>
      </div>
      <div className={style.bar}>
        <div className={style.accentBar}></div>
      </div>
    </header>
  )
}
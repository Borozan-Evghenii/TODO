import React from 'react'
import style from './Heading.module.css'

export default function Heading() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  return (
    <div className={style.headingContainer}>
      <h1 className={style.heading}>Tomorow</h1>
      <div>
        <span className={style.date}>{today.toLocaleDateString()}</span>
      </div>
    </div>
  )
}

import React from 'react'
import style from './Template.module.css'

export default function Template({children}) {
  return (
    <div className={style.templateContainer}>
      <div className={style.templateContent}>
        <h3>{children }</h3>
      </div>
    </div>
  )
}

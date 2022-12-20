import React from 'react'
import style from './Input.module.css'

export default function Input({inputValue, setInputValue}) {
  return (
    <input 
      value={inputValue}
      onChange={(e)=>{setInputValue(e.target.value)}}
      className={style.input} type="text" 
    />
  )
}

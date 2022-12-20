import React from 'react'
import Button from '../button/Button'
import style from './BottomBar.module.css'

export default function BottomBar({setShowModal, showModal}) {
  return (
    <div className={style.bottomBar}>
      <Button onClick={()=>{setShowModal(!showModal)}}>+ Add Tasks</Button>
    </div>
  )
}

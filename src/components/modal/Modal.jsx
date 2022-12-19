import React from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import style from './Modal.module.css'

export default function Modal() {
  return (
    <div className={style.modal}>
      <div>
        <div className={style.modalContainer}>
          <form >
            <Input />
            <Button>Add Task</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

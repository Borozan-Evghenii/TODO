
import React ,{ useState }from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import style from './Modal.module.css'

export default function Modal({addTask, showModal, setShowModal }) {
  const [inputValue, setInputValue] = useState('')
  
  const add = (e) =>{
    e.preventDefault()
    addTask(inputValue)
    setInputValue('')
    setShowModal(!showModal)

  }


  const closeModal = (e) =>{
    e.stopPropagation()
    setShowModal(!showModal)
  }

  return (
    <div className={style.modal} onClick={closeModal} >
      <div onClick={(e)=>e.stopPropagation()}>
        <div className={style.modalContainer}>
            <Input
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
            <Button onClick={add}>Add Task</Button>
        </div>
      </div>
    </div>
  )
}

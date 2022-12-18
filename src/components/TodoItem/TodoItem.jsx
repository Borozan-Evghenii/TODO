import style from './TodoItem.module.css'

export default function TodoItem({ children, status}) {
  return (
    <button  className={`${style.itemContainerstatus} ${status? style.completed : ''}`} >
      {children}
    </button>
  )
}

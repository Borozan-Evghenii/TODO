import React ,{useState}from 'react'

export default function ToDoForm({addTask}) {

  const [userInput, setUserInput] = useState('')

  const handleChange = (e) =>{
    setUserInput(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
    

  }

  const handleKeyPress = (e) => {
    
  }

  return (
  <form onSubmit={handleSubmit}>
    <input type="text"
      value={userInput}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      placeholder='Write the task'
    />
    <button>Add Task</button>
  </form>
  )
}

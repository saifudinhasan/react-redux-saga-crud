import { useRef } from "react"
import { useDispatch } from 'react-redux'
import { postTodo } from "../redux/actions/todoActions"

const Input = () => {
  const dispatch = useDispatch()
  const todoRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()

    const initialTodo = {
      text: todoRef.current.value.trim(),
      completed: false
    }

    // Post ...
    dispatch(postTodo(initialTodo))

    todoRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={todoRef} />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default Input
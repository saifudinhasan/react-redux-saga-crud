import { useSelector } from 'react-redux'
import Todo from './Todo'

const TodoLists = () => {

  const { todos, error } = useSelector(state => state)

  return (
    <ul className="todo-list">
      {todos?.map(todo => <Todo todo={todo} key={todo.id} />)}
      {error && <h3>{error}</h3>}
    </ul>
  )
}

export default TodoLists
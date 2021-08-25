import acts from '../acts'

// First request trigger 
export const getTodos = () => ({ type: acts.GET_TODOS_REQUEST })
export const postTodo = (newTodo) => ({ type: acts.POST_TODO_REQUEST, payload: newTodo })
export const deleteTodo = (todoID) => ({ type: acts.DELETE_TODO_REQUEST, payload: todoID })
export const putTodo = (todo, newData) => {
  const updatedTodo = {
    ...todo,
    ...newData
  }
  return { type: acts.PUT_TODO_REQUEST, payload: { id: todo.id, updatedTodo } }
}


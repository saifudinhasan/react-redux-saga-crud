import acts from "../acts"

// action destructured to {type, payload}
const todosReducer = (state = [], { type, payload }) => {
  switch (type) {

    case acts.GET_TODOS_SUCCESS: return payload

    case acts.POST_TODO_SUCCESS: return [...state, payload]

    case acts.PUT_TODO_SUCCESS: return state.map(todo => todo.id === payload.id ? payload : todo)

    case acts.DELETE_TODO_SUCCESS: return state.filter(todo => todo.id !== payload)

    default: return state
  }
}

export default todosReducer
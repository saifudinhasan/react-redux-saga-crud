import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Input from "./container/Input";
import TodoList from "./container/TodoLists";
import { getTodos } from "./redux/actions/todoActions";

function App() {

  const dispatch = useDispatch()
  // Fetch init
  useEffect(() => dispatch(getTodos()), [])

  return (
    <div className="app">
      <h1>Todo App with Saga</h1>
      <TodoList />
      <Input />
    </div>
  );
}

export default App;

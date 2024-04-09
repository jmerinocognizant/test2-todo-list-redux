import { TodoAdd } from "./components/TodoAdd"
import { TodoList } from "./components/TodoList"


export const TodoApp = () => {
  return (
    <>
        <div className="w-75 App-container">
          <h1>My Todos</h1>
          <TodoAdd />
          <TodoList />
        </div>
    </>
  )
}

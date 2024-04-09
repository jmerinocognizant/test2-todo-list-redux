import { TodoItem } from "./TodoItem"
import { useAppSelector } from '../../../app/hooks';
import {
  selectTodos,
  selectEditable,
} from '../store/todoSlice';


export const TodoList = () => {

  const todoList = useAppSelector(selectTodos);
  const idEditable = useAppSelector(selectEditable);

  return (
    <>
        <div className="container-fluid">
        <ul className="list-group mt-3">
            {
              todoList.length === 0?
                <h3>No records</h3>

              :  todoList.map( item => 
                    <TodoItem key={ item.id } todo={item} editable={ item.id === idEditable} />)
            }
        </ul>  
        </div>
    </>
  )
}

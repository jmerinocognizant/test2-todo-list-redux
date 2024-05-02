import { Todo } from "../interfaces/interfaces"
import { CompletedBtn } from "./CompletedBtn";
import { ImportantBtn } from "./ImportantBtn";
import { TodoItemDescription } from "./TodoItemDescription";
import { TodoItemEditable } from "./TodoItemEditable";
import { useAppDispatch } from '../../../app/hooks';
import {
    removeTodo,
    updateTodo,
    setEditable,
  } from '../store/todoSlice';
import { TodoItemBtn } from "./TodoItemBtn";
  
interface props {
    todo: Todo,
    editable: boolean,
}

export const TodoItem = ( {todo,editable}:props) => {
  
    const dispatch = useAppDispatch();

    const onDoubleClick = () => {
        dispatch(setEditable(todo.id));
    }

    const onRemoveTodo = () => {
        dispatch(removeTodo(todo.id));
    }

    const handleClickImportant = () => {
        const todoUpdated = {...todo,
                            important: !todo.important };
        dispatch(updateTodo(todoUpdated));
    }

    const handleClickCompleted = () => {
        const todoUpdated = {...todo,
            completed: !todo.completed };
        dispatch(updateTodo(todoUpdated));
    }

    const onSaveClickHandler = (textDescription:string) =>{
        const todoUpdated = {...todo,
            description: textDescription };
        dispatch(updateTodo(todoUpdated));
        dispatch(setEditable(0));
    }

    return (
        <>    
            < hr/>
            <div aria-label="todo-item" className="container-fluid todo-item">
                <div className="row">
                    <div className="col-auto mt-0  v-top">
                        {/* <CompletedBtn completed={todo.completed} onClickHandler={handleClickCompleted}/>  */}
                        <TodoItemBtn aria-label="btn-completed" checked={todo.completed} classNameIcon="fa-solid fa-check" onClickHandler={handleClickCompleted} />
                    </div>
                    <div className="col-auto mt-0  v-top">
                        {/* <ImportantBtn important={todo.important} onClickHandler={handleClickImportant}/> */}
                        <TodoItemBtn aria-label="btn-important" checked={todo.important} classNameIcon="fa-solid fa-exclamation" onClickHandler={handleClickImportant} />
                    </div>
                    
                    <div className="col">
                        {
                        editable ?(
                            <TodoItemEditable description = {todo.description} onSaveClick={onSaveClickHandler}/>  
                        ):(  
                            <TodoItemDescription description={todo.description} onDoubleClick={onDoubleClick}/>      
                        )
                        }
                    </div>
                    <div className="col-auto mt-0">
                        <button aria-label="btn-remove" className="btn btn-danger align-top" onClick={onRemoveTodo}>
                            remove
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

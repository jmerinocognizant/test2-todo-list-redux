import { useForm } from "../hooks/useForm";
import { Todo } from "../interfaces/interfaces";
import { useAppDispatch } from '../../../app/hooks';
import { addTodo } from '../store/todoSlice';

export const TodoAdd = () => {
  
  const dispatch = useAppDispatch();

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
    });

  const onFormSubmit = ( event : React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    if ( description.length <= 1 ) return;

    const newTodo:Todo = {
        id: new Date().getTime(),
        description: description,
        completed: false,
        important: false,
    }

    dispatch(addTodo(newTodo));
    onResetForm();
  }
  
  return (
    <>
      <div className="container-fluid">
          <form aria-label="form" onSubmit = {onFormSubmit }>

          <div className="row">
            <div className="col">
              <input 
                      type="text" 
                      placeholder="Add something to do..."
                      className="form-control align-top"
                      name="description"
                      value={ description }
                      onChange={ onInputChange }
                  />
              </div>
            <div className="col-auto mt-0">      
              <button
                  type="submit" 
                  className="btn btn btn-primary align-top"
              >
                  Save
              </button>
            </div>
            </div>  
          </form>
      </div>
    </>
  )
}

import { useState } from "react";

interface props {
    description: string,
    onSaveClick: (text:string) => void,
}
export const TodoItemEditable = ({description,onSaveClick}:props) => {

  const [textDescription, setTextDescription] = useState(description);
  const [disabled, setDisabled] = useState(false);

  const onSaveClickHandler = () => {
    if ( description.length <= 1 ) return;
    onSaveClick(textDescription);
  }

  const onInputChange = (text:string) => {
    setTextDescription(text);
    setDisabled(text.length<=1);
  }

  return (
    <>
        <div className="container-fluid p-0 ">
            <div className="row" >
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control align-top"
                        name="description"
                        value={ textDescription }
                        onChange={ (event) => onInputChange(event.target.value) }
                    />
                </div>
                <div className="col-auto mt-0">
                    <button 
                        aria-label="btn-save"
                        className="btn btn-primary align-top"
                        disabled={disabled}
                        onClick={onSaveClickHandler}>
                        save
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

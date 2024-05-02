interface props {
    checked: boolean,
    classNameIcon: string,
    onClickHandler: () => void,
}

export const TodoItemBtn = ({checked,classNameIcon,onClickHandler}:props) => {
    const btnClassName = checked? "btn btn-block btn-primary item-btn":"btn btn-block btn-outline-primary item-btn"
    
  return (
    <>
         <button aria-label="btn-todo" className={btnClassName} onClick={onClickHandler}>
                <i className={classNameIcon} ></i>
         </button>
    </>
  )
}

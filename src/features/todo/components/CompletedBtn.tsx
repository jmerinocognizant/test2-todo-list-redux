interface props {
    completed: boolean,
    onClickHandler: () => void,
}

export const CompletedBtn = ({completed,onClickHandler}:props) => {
  return (
    <>
        {
        completed?
            <button aria-label="btn-completed" className="btn btn-block btn-primary item-btn" onClick={onClickHandler}>
                <i className="fa-solid fa-check" ></i>
            </button>
            :
            <button aria-label="btn-completed" className="btn btn-block btn-outline-primary item-btn" onClick={onClickHandler}>
                <i className="fa-solid fa-check" ></i>
            </button>
        }    
    </>
  )
}

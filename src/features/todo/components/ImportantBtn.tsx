interface props {
    important: boolean,
    onClickHandler: () => void,
}

export const ImportantBtn = ({important,onClickHandler}:props) => {
  return (
    <>
        {
        important?
            <button aria-label="btn-important" className="btn btn-block btn-primary item-btn" onClick={onClickHandler}>
                <i className="fa-solid fa-exclamation" ></i>
            </button>
            :
            <button aria-label="btn-important" className="btn btn-block btn-outline-primary item-btn" onClick={onClickHandler}>
                <i className="fa-solid fa-exclamation" ></i>
            </button>
        }    
    </>
  )
}

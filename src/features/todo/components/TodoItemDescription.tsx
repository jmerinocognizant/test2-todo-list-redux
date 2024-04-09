
interface props {
    description: string,
    onDoubleClick: () => void,
}

export const TodoItemDescription = ({description,onDoubleClick}:props) => {
  return (
    <>
        <div aria-label="item-description" className="w-100 p-0" onDoubleClick={onDoubleClick}>
            <span  className="h6 v-top ">{description}</span>
        </div>
    </>
  )
}

import style from "./TodoItem.module.css";

const TodoItem = ({ id, taskName, dueDate, setItems }) => {

  const removeItem = (rid) =>{
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== rid);
    });
  }

  return (
    <>
      <div className="row align-items-center my-3 bg-light text-dark py-2 rounded-4 mx-3">
        <div className="col-6 fs-5">{taskName}</div>
        <div className="col-4 fs-5">{dueDate}</div>
        <div className="col-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="red"
            className={`bi bi-x-circle ${style.cursorPointer}`}
            viewBox="0 0 16 16"
            onClick={() => removeItem(id)}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default TodoItem;

import { useRef } from "react";
import style from "./AddTodo.module.css";

const AddTodo = ({ setItems }) => {
  const taskElement = useRef();
  const dateElement = useRef();

  const addItem = () => {
    let taskValue = taskElement.current.value;
    let dateValue = dateElement.current.value;
    if (taskValue != "" || dateValue != "") {
      setItems((item) => {
        return [
          ...item,
          {
            id: item.length + 1,
            task: taskValue,
            dueDate: dateValue,
          },
        ];
      });

      taskElement.current.value = "";
      dateElement.current.value = "";
    }
  };

  return (
    <>
      <div className="container text-center">
        <div className="row align-items-center bg-light text-dark py-2 rounded-4">
          <div className="col-sm-6 col-md-6 col-lg-10">
            <input
              name="task"
              type="text"
              ref={taskElement}
              className={`w-75 p-2 ${style.taskInput}`}
              placeholder="Enter Task here"
            />
          </div>
          <div className="col-sm-1 col-md-1 col-lg-1">
            <input
              ref={dateElement}
              type="date"
              className={style.customDatePicker}
            />
          </div>
          <div className="col-sm-1 col-md-1 col-lg-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="green"
              className={`bi bi-plus-circle ${style.cursorPointer}`}
              viewBox="0 0 16 16"
              onClick={addItem}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;

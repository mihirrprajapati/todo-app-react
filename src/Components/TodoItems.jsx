import TodoItem from "./TodoItem";

const TodoItems = ({ items, setItems }) => {
  return (
    <>
      <div className="container text-center mt-5">
        {/* <div className="row align-items-center my-3 bg-dark text-light py-2 rounded-2">
          <div className="col-6 fs-4">Task</div>
          <div className="col-4 fs-4">Due Date</div>
          <div className="col-2 fs-4">Action</div>
        </div> */}
        {items.map((val, index) => {
          return (
            <TodoItem id={val.id} taskName={val.task} dueDate={val.dueDate} key={index} setItems={setItems} />
          );
        })}
      </div>
    </>
  );
};

export default TodoItems;

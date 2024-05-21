import TodoItem from "./TodoItem";

const TodoItems = ({ items, setItems }) => {
  return (
    <>
      <div className="container text-center mt-5">
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

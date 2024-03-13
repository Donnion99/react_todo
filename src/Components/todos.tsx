import TodoItem from "./TodoItem";

function Todo_add(props: {
  data: any[];
  onDelete: any;
  // myStyles: any;
  // toggleSwitch: any;
}) {
  return (
    <>
      <br />
      <h2>Todos List</h2>
      <ul>
        {props.data.length === 0
          ? "No Todos to Display"
          : props.data.map((todo: any) => (
              <TodoItem
                key={todo.id}
                data={todo}
                onDelete={props.onDelete}
                // toggle={props.myStyles}
              />
            ))}
      </ul>
    </>
  );
}

export default Todo_add;

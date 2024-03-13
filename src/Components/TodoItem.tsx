function TodoItem(props: { data: any; onDelete: any }) {
  return (
    <>
      <ol className="list-group mt-3">
        <li
          className="list-group-item d-flex justify-content-between align-items-start"
          // style={props.toggle}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{props.data.Task}</div>
            {props.data.Desc}
          </div>
          <button
            onClick={() => props.onDelete(props.data)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </li>
      </ol>
    </>
  );
}

export default TodoItem;

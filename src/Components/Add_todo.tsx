import { useState } from "react";
function Add_todo(props: {
  add_Todofun: (arg0: string, arg1: string) => void;
}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function submit(Event: any) {
    Event.preventDefault();
    if (!title || !desc) {
      alert("Title or Description Cannot be blank");
    } else {
      props.add_Todofun(title, desc);
      setTitle("");
      setDesc("");
    }
  }

  return (
    <>
      <div className="container">
        <h2 className="mt-3">Add a Todo</h2>
        <form onSubmit={submit}>
          <div className="mb-3 mt-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Task
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter your Task"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter Description"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>
      </div>
    </>
  );
}

export default Add_todo;

import Nav from "./Components/nav";
import Todos from "./Components/todos";
import { useState, useEffect } from "react";
import Add_todo from "./Components/Add_todo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/about";

function app() {
  //night mode
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [texts, settext] = useState("Enable Dark Mode");

  // let toggleSwitch = () => {
  //   if (myStyle.color == "black") {
  //     setmyStyle({ color: "white", backgroundColor: "black" });
  //     settext("Enable Light Mode");
  //   } else {
  //     setmyStyle({ color: "black", backgroundColor: "white" });
  //     settext("Enable Dark Mode");
  //   }
  // };
  //localStorage
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos") || "");
  }
  //rendering main page
  function apps() {
    return (
      <>
        <div className="container">
          <Add_todo add_Todofun={add_Todofun} />

          <Todos data={final_task} onDelete={onDelete} />
          {/* <button
            className="btn btn-light btn-lg float-right"
            onClick={toggleSwitch}
          >
            {texts}
          </button> */}
        </div>
      </>
    );
  }
  //deleting task funtion
  function onDelete(todo: object) {
    // console.log(todo);
    up_finaltask(
      final_task.filter((e: Event) => {
        return e !== todo;
      })
    );
  }

  //funtion to add tasks
  function add_Todofun(title: string, desc: string) {
    // console.log("imt adding this todo: ", title, "Desc: ", desc);
    let id;
    if (final_task.length === 0) {
      id = 1;
    } else {
      id = final_task[final_task.length - 1].id + 1;
    }
    const myTodo = {
      Task: title,
      Desc: desc,
      id: id,
    };
    up_finaltask([...final_task, myTodo]);
    // console.log(myTodo);
  }
  //task usestate
  let [final_task, up_finaltask] = useState(initTodo);
  //updating task to localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(final_task));
  }, [final_task]);
  //rendering all data
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={apps()} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default app;

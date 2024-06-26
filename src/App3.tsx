import { useReducer } from "react";
import "./App.css";
import TasksContext from "./state-management/tasks/tasksContext";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import LoginStatus from "./state-management/auth/LoginStatus";
import NavBar from "./state-management/NavBar";
import tasksReducer from "./state-management/tasks/tasksReducer";
import TaskList from "./state-management/tasks/TaskList";

function App3() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  );
  // return (
  //   <>
  //     {/* <Counter/> */}
  //     {/* <TaskList /> */}
  //     {/* <LoginStatus/> */}
  //   </>
  // );
}

export default App3;

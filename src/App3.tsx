import { useReducer } from "react";
import "./App.css";
import TasksContext from "./state-management/contexts/tasksContext";
import Counter from "./state-management/Counter";
import HomePage from "./state-management/HomePage";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import tasksReducer from "./state-management/reducers/tasksReducer";
import TaskList from "./state-management/TaskList";

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

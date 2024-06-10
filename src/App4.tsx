import { useReducer } from "react";
import "./App.css";
import AuthContext from "./state-management/contexts/authContext";
import TasksContext from "./state-management/contexts/tasksContext";
import HomePage from "./state-management/HomePage";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import authReducer from "./state-management/reducers/authReducer";
import tasksReducer from "./state-management/reducers/tasksReducer";

function App4() {
  const [user, authDispatch] = useReducer(authReducer, "");

  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );

  // return (
  //   <AuthContext.Provider value={{ user, dispatch }}>
  //     <LoginStatus />
  //   </AuthContext.Provider>
  // );
}

export default App4;

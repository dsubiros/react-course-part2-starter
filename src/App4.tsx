import { useReducer } from "react";
import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import AuthContext from "./state-management/contexts/authContext";
import TasksContext from "./state-management/contexts/tasksContext";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import authReducer from "./state-management/reducers/authReducer";
import tasksReducer from "./state-management/reducers/tasksReducer";

function App4() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );

  // return (
  //   <AuthContext.Provider value={{ user, dispatch }}>
  //     <LoginStatus />
  //   </AuthContext.Provider>
  // );
}

export default App4;

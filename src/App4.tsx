import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksProvider from "./state-management/TasksProvider";

function App4() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );

  // return (
  //   <AuthContext.Provider value={{ user, dispatch }}>
  //     <LoginStatus />
  //   </AuthContext.Provider>
  // );
}

export default App4;

import { useContext } from "react";
import AuthContext from "./contexts/authContext";
import TasksContext from "./contexts/tasksContext";
import LoginStatus from "./LoginStatus";

const NavBar = () => {
  const {
    tasks: { length: count },
  } = useContext(TasksContext);
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar d-flex justify-content-between">
      {!!user && <span className="badge text-bg-secondary">{count}</span>}
      <LoginStatus />
    </nav>
  );
};

export default NavBar;

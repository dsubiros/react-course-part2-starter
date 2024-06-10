import { useAuth } from "./auth";
import LoginStatus from "./auth/LoginStatus";
import { useTasks } from "./tasks";

const NavBar = () => {
  // const { tasks } = useContext(TasksContext);
  const { tasks } = useTasks();
  const { user } = useAuth();

  return (
    <nav className="navbar d-flex justify-content-between">
      {!!user && (
        <span className="badge text-bg-secondary">{tasks.length}</span>
      )}
      <LoginStatus />
    </nav>
  );
};

export default NavBar;

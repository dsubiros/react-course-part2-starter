import { useAuth } from "./auth";
import LoginStatus from "./auth/LoginStatus";
import useAuthStore from "./auth/store";
import useCounterStore from "./counter/store";
import { useTasks } from "./tasks";

const NavBar = () => {  
  const { tasks } = useTasks();
  // const { user } = useAuth();
  const { user } = useAuthStore();
  const {counter} = useCounterStore();

  return (
    <nav className="navbar d-flex justify-content-between">
      {!!user && (
        // <span className="badge text-bg-secondary">{tasks.length}</span>
        <span className="badge text-bg-secondary">{counter}</span>
      )}
      <LoginStatus />
    </nav>
  );
};

export default NavBar;

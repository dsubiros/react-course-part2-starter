import LoginStatus from "./auth/LoginStatus";
import useAuthStore from "./auth/store";
import useCounterStore from "./counter/store";
import { useTasks } from "./tasks";

const NavBar = () => {  
  const { tasks } = useTasks();
  // const { user } = useAuth();
  const { user } = useAuthStore();
  const max = useCounterStore(s => s.max);
  
  console.log('Render NavBar');
  

  return (
    <nav className="navbar d-flex justify-content-between">
      {!!user && (
        // <span className="badge text-bg-secondary">{tasks.length}</span>
        // <span className="badge text-bg-secondary">{counter}</span>
        <span className="badge text-bg-secondary">{max}</span>
      )}
      <LoginStatus />
    </nav>
  );
};

export default NavBar;

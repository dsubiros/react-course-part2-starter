import { useContext, useReducer } from "react";
import AuthContext from "./contexts/authContext";
import TasksContext from "./contexts/tasksContext";
import tasksReducer from "./reducers/tasksReducer";

const TaskList = () => {
  // const [tasks, dispatch] = useReducer(tasksReducer, []);
  const { tasks, dispatch } = useContext(TasksContext);
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;

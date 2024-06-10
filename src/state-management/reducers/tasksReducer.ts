export interface Task {
  id: number;
  title: string;
}

interface AddAction {
  type: "ADD";
  task: Task;
}

interface DeleteAction {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddAction | DeleteAction;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter(t => t.id !== action.taskId);
    default:
      return tasks;
  }
};

export default tasksReducer;

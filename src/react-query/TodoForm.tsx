import { useRef } from "react";
import useAddTodo from "../hooks/useAddTodo";

// interface AddTodoCtx {
//   previousTodos: Todo[];
// }

const TodoForm = () => {
  // const queryClient = useQueryClient();

  // const addTodo = useMutation<Todo, Error, Todo, AddTodoCtx>({
  //   mutationFn: (todo: Todo) =>
  //     axios
  //       .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
  //       .then((res) => res.data),
  //   /**
  //    * Mutate data in-place as optimistic update, but should deal later
  //    * with onSuccess or errored status */
  //   onMutate: (newTodo: Todo) => {
  //     const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];

  //     queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
  //       newTodo,
  //       ...(todos || []),
  //     ]);
  //     if (ref.current) {
  //       ref.current.value = "";
  //       ref.current.focus();
  //     }

  //     return { previousTodos };
  //   },
  //   onError: (error, newTodo, ctx) => {
  //     if (!ctx) return;

  //     queryClient.setQueryData<Todo[]>(["todos"], ctx?.previousTodos);
  //   },
  //   onSuccess: (savedTodo, newTodo) => {
  //     // console.log(savedTodo);

  //     queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
  //       todos?.map((todo) => (todo.id === newTodo.id ? savedTodo : todo))
  //     );

  //     // APPROACH 1: Invalidating the Cache
  //     // queryClient.invalidateQueries({
  //     //   queryKey: ['todos']
  //     // });

  //     // APPROACH 2: Updating the data in the Cache
  //     // queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
  //     //   savedTodo,
  //     //   ...(todos || []),
  //     // ]);
  //     // if (ref.current) ref.current.value = "";

  //     // Using onMutate
  //     // queryClient.setQueryData<Todo[]>(["todos"], (todos) => {
  //     //   const data = [...(todos || [])];
  //     //   const idx = data.findIndex((x) => x.id === 0);
  //     //   if (idx !== -1) data[idx] = savedTodo;
  //     //   return data;
  //     // });
  //   },
  // });

  const ref = useRef<HTMLInputElement>(null);
  
  const addTodo = useAddTodo(() => {
    if (ref.current) {
      ref.current.value = "";
      ref.current.focus();
    }
  });

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(ref.current?.value);
          addTodo.mutate({
            id: 0,
            title: ref.current?.value || "",
            completed: false,
            userId: 1,
          });
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button disabled={addTodo.isLoading} className="btn btn-primary">
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;

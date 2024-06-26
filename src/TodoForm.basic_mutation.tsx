// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useRef } from "react";
// import { Todo } from "../hooks/useTodos";
// import axios from "axios";

// const TodoForm = () => {
//   const queryClient = useQueryClient();

//   const addTodo = useMutation<Todo, Error, Todo>({
//     mutationFn: (todo: Todo) =>
//       axios
//         .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
//         .then((res) => res.data),
//     onSuccess: (savedTodo, newTodo) => {
//       console.log(savedTodo);

//       // APPROACH 1: Invalidating the Cache
//       // queryClient.invalidateQueries({
//       //   queryKey: ['todos']
//       // });

//       // APPROACH 2: Updating the data in the Cache
//       queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
//         savedTodo,
//         ...(todos || []),
//       ]);
//       if (ref.current) ref.current.value = "";
//     },
//   });

//   const ref = useRef<HTMLInputElement>(null);

//   return (
//     <>
//       {addTodo.error && (
//         <div className="alert alert-danger">{addTodo.error.message}</div>
//       )}
//       <form
//         className="row mb-3"
//         onSubmit={(e) => {
//           e.preventDefault();
//           console.log(ref.current?.value);
//           addTodo.mutate({
//             id: 0,
//             title: ref.current?.value || "",
//             completed: false,
//             userId: 1,
//           });
//         }}
//       >
//         <div className="col">
//           <input ref={ref} type="text" className="form-control" />
//         </div>
//         <div className="col">
//           <button disabled={addTodo.isLoading} className="btn btn-primary">
//             {addTodo.isLoading ? "Adding..." : "Add"}
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default TodoForm;

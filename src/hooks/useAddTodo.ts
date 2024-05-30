import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import { Todo } from "./useTodos";

interface AddTodoCtx {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoCtx>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    /**
     * Mutate data in-place as optimistic update, but should deal later
     * with onSuccess or errored status */
    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos };
    },
    onError: (error, newTodo, ctx) => {
      if (!ctx) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, ctx?.previousTodos);
    },
    onSuccess: (savedTodo, newTodo) => {
      // console.log(savedTodo);

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo.id === newTodo.id ? savedTodo : todo))
      );

      // APPROACH 1: Invalidating the Cache
      // queryClient.invalidateQueries({
      //   queryKey: CACHE_KEY_TODOS
      // });

      // APPROACH 2: Updating the data in the Cache
      // queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
      //   savedTodo,
      //   ...(todos || []),
      // ]);
      // if (ref.current) ref.current.value = "";

      // Using onMutate
      // queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => {
      //   const data = [...(todos || [])];
      //   const idx = data.findIndex((x) => x.id === 0);
      //   if (idx !== -1) data[idx] = savedTodo;
      //   return data;
      // });
    },
  });
};

export default useAddTodo;

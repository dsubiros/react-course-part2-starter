import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import todoService, { Todo } from "../services/todoServices";

interface AddTodoCtx {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoCtx>({
    mutationFn: todoService.post,
    /**
     * Mutate data in-place as optimistic update, but should deal later
     * with onSuccess or errored status */
    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      // This line affects the UI
      onAdd();

      return { previousTodos };
    },
    onError: (error, newTodo, ctx) => {
      if (!ctx) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, ctx?.previousTodos);
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo.id === newTodo.id ? savedTodo : todo))
      );
    },
  });
};

export default useAddTodo;

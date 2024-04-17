import { useSyncExternalStore } from "react";
import store from "./store";

const List = () => {
  const todos = useSyncExternalStore(store.subscribe, store.getTodos);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => store.toggleTodo(todo.id)}
            />
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default List;

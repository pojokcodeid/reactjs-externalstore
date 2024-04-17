let todos = [];
let subscribers = new Set();

const store = {
  getTodos() {
    return todos;
  },
  subscribe(callback) {
    subscribers.add(callback);
    return () => subscribers.delete(callback);
  },
  addTodo(text) {
    todos = [
      ...todos,
      {
        id: new Date().getTime(),
        text: text,
        completed: false,
      },
    ];
    subscribers.forEach((callback) => {
      callback();
    });
  },
  toggleTodo(id) {
    todos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    subscribers.forEach((callback) => callback());
  },
};

export default store;

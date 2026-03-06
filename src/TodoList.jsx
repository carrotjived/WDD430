import { TodoItems } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItems {...todo}
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            key={todo.id} toggleTodo= {toggleTodo} deleteTodo={deleteTodo}  
          />
        );
      })}
    </ul>
  );
}

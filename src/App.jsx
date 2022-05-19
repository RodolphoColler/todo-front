import './todo.css';
import { BiPlusMedical } from 'react-icons/bi';
import { useState } from 'react';
import create from './services/todo';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    setTodos((prev) => [...prev, newTodo]);
    await create(newTodo);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-input">
          <input
            type="text"
            id="todo-input"
            placeholder="write a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </label>
        <button type="submit" aria-label="add new todo"><BiPlusMedical /></button>
      </form>
      <ul>
        {
          todos.map((todo) => <li>{ todo }</li>)
        }
      </ul>
    </main>
  );
}

export default App;

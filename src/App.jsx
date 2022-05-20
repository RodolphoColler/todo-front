import './todo.css';
import { BiPlusMedical } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import create, { getAll, deleteTodo } from './services/todo';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    await create(newTodo);
    const requestedTodos = await getAll();
    setTodos(requestedTodos);
  }

  async function handleDelete(event) {
    await deleteTodo(event.target.id);
    const requestedTodos = await getAll();
    setTodos(requestedTodos);
  }

  useEffect(() => {
    getAll().then((result) => setTodos(result));
  }, []);

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
        <button type="submit" aria-label="add new todo" className="submit-button"><BiPlusMedical /></button>
      </form>
      <ul>
        {
          todos.map(({ id, todo }) => (
            <li key={id}>
              { todo }
              <button type="button" id={id} className="delete-button" onClick={(event) => handleDelete(event)}>
                <FiTrash2 id={id} />
              </button>
            </li>
          ))
        }
      </ul>
    </main>
  );
}

export default App;

import './todo.css';
import { BiPlusMedical } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import create, { getAll } from './services/todo';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const todo = { todo: newTodo, finished: false, id: todos.length };
    setTodos((prev) => [...prev, todo]);
    await create(newTodo);
  }

  useEffect(() => {
    getAll()
      .then((result) => setTodos(result))
      .catch(() => { global.alert('Sua requisição não foi executada com sucesso'); });
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
        <button type="submit" aria-label="add new todo"><BiPlusMedical /></button>
      </form>
      <ul>
        {
          todos.map(({ id, todo }) => <li key={id}>{ todo }</li>)
        }
      </ul>
    </main>
  );
}

export default App;

export default async function create(todo) {
  try {
    const headers = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ todo }),
      headers: { 'Content-Type': 'application/json' },
    };
    const request = await fetch('http://localhost:3001/todo', headers);
    const response = await request.json();

    return response;
  } catch (error) {
    return error;
  }
}

export async function deleteTodo(id) {
  try {
    const headers = {
      method: 'DELETE',
      mode: 'cors',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' },
    };
    const request = await fetch('http://localhost:3001/todo', headers);
    const response = await request.json();

    return response;
  } catch (error) {
    return error;
  }
}

export async function getAll() {
  const request = await fetch('http://localhost:3001/todo');
  const response = await request.json();

  return response;
}

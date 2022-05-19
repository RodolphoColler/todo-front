// export default async function getAll() {
//   try {
//     const request = await fetch('http://localhost:3001/todo');
//     const response = await request.json();

//     return response;
//   } catch (error) {
//     return error;
//   }
// }
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

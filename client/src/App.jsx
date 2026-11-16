import { useState } from 'react';
export default function App() {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) return;
    setTasks((current) => [
      ...current,
      { id: crypto.randomUUID(), title: cleanTitle },
    ]);
    setTitle('');
  }
}
  return (
    <main>
      <h1>Study Task Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Task title</label>
        <input id="title" value={title} maxLength={100}
          onChange={(event) => setTitle(event.target.value)} />
        <button type="submit">Add task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </main>
  );
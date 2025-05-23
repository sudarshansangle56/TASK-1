import React, { useState } from 'react';

function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form style={{  display:'flex', gap:'7px', padding: '10px',}}
    onSubmit={handleSubmit}>
      <input
        style={{borderRadius:'5px', border: '1px solid black'}}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <textarea
      style={{borderRadius:'5px', border: '1px solid black'}}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <button  style={{borderRadius:'5px', border: '1px solid black', width:'110px', cursor:'pointer'}} type="submit">Add</button>
    </form>
  );
}

export default TaskForm;

import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'test note 1',
      content: 'bla bla note1',
    },
    {
      id: 2,
      title: 'test note 2',
      content: 'bla bla note2',
    },
    {
      id: 3,
      title: 'test note 3',
      content: 'bla bla note3',
    },
    {
      id: 4,
      title: 'test note 4',
      content: 'bla bla note4',
    },
  ]);

  const handleAddNote = (event) => {
    event.preventDefault();

    const newNote = {
      id: notes.length + 1,
      title: title,
      content: content,
    };

    // Update State with New Note
    setNotes([newNote, ...notes]);

    // Clear the Form Inputs
    setTitle('');
    setContent('');
  };

  return (
    <div className="app-container">
      <form onSubmit={handleAddNote} className="note-form">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Content"
          rows={10}
          required
        />
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div className="note-item" key={note.id}>
            <div className="notes-header">
              <button>x</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

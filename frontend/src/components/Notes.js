import React, { useState, useEffect } from 'react';
import Note from './Note';
import axios from 'axios';

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const { data } = await axios.get('http://localhost:8080/api/notes');
      setNotes(data.data);
    }
    fetchNotes();
    return () => {};
  }, []);

  async function handleDelete(id) {
    console.log(`Deleting note with id ${id}`);
    const { data } = await axios.delete(
      `http://localhost:8080/api/notes/${id}`
    );
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    console.log(data);
  }

  return (
    <section>
      <div className='container'>
        <div className='row'>
          {notes &&
            notes.map((note) => {
              return (
                <Note note={note} handleDelete={handleDelete} key={note._id} />
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Notes;

import React, { useState, useEffect } from 'react';
import Note from './Note';
import axios from 'axios';

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const { data } = await axios.get('http://localhost:8080/api/notes');
      console.log('data', data);
      setNotes(data.data);
    }
    fetchNotes();
    return () => {};
  }, []);

  return (
    <section>
      <div className='container'>
        <div className='row'>
          {notes &&
            notes.map((note) => {
              return <Note title={note.title} description={note.description} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default Notes;

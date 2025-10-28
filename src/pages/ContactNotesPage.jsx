import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactNotesPage = () => {
  const { contactId } = useParams();
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const nav = useNavigate();
  useEffect(() => {
    async function fetchNotes() {
      try {
        const { data } = await axios.get(
          `http://localhost:5005/notes/${contactId}`
        );
        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }
    fetchNotes();
  }, [contactId]);

  async function handleAddNote(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:5005/notes/add-note/${contactId}`,
        { content: newNote }
      );
      setNotes([data, ...notes]);
      setNewNote("");
      nav("/contacts"); // ASK JOSH WHY I CANT NAV TO THE ID PAGE
    } catch (error) {
      console.error("Error adding note:", error);
    }
  }

  async function handleDelete(noteId) {
    try {
      await axios.delete(`http://localhost:5005/notes/delete-note/${noteId}`);
      setNotes(notes.filter((n) => n._id !== noteId));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }
  return (
    <div className="notes-container">
      <form onSubmit={handleAddNote}>
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write a note..."
        ></textarea>

        {/* No button-group wrapper */}
        <button type="submit" className="btn" disabled={!newNote.trim()}>
          Add Note
        </button>
      </form>

      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <span>{note.content}</span>
            <button
              type="button"
              className="btn"
              onClick={() => handleDelete(note._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactNotesPage;

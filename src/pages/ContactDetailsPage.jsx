import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../config/api.config";

const ContactDetailsPage = () => {
  const [contactState, setContactState] = useState({});
  const { contactId } = useParams();
  const nav = useNavigate();

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getOneContact() {
      try {
        const { data } = await axios.get(
          //`http://localhost:5005/contact/single-contact/${contactId}`//
          `${API_URL}/contact/single-contact/${contactId}`
        );
        console.log("Fetched contact:", data);
        setContactState(data);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }

    async function getNotes() {
      try {
        const { data } = await axios.get(
          //`http://localhost:5005/notes/${contactId}`//
          `${API_URL}/notes/${contactId}`
        );
        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }

    getOneContact();
    getNotes();
  }, [contactId]);

  async function handleDelete() {
    try {
      const { data } = await axios.delete(
        // `http://localhost:5005/contact/delete-a-contact/${contactId}`//
        `${API_URL}/contact/delete-a-contact/${contactId}`
      );

      nav("/contacts");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="contact-container">
      <h2>Contact Info: {contactState.name}</h2>
      <p>Email: {contactState.email}</p>
      <p>Phone: {contactState.phoneNumber}</p>
      <p>Address: {contactState.address}</p>
      <img
        src={contactState.image}
        alt="contactImage"
        className="contact-image"
      />

      <button onClick={handleDelete} className="btn">
        Delete
      </button>
      <Link to={`/contacts/edit/${contactId}`}>
        <button className="btn">Edit</button>
      </Link>
      <Link to={`/contacts/${contactId}/notes`}>
        <button className="btn">Notes</button>
      </Link>
    </div>
  );
};

export default ContactDetailsPage;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Authcontext } from "../context/AuthContext";

const ContactListPage = () => {
  const [contacts, setContacts] = useState([]);
  const { currentUser } = useContext(Authcontext);
  useEffect(() => {
    async function getAllContacts() {
      try {
        const { data } = await axios.get(
          `http://localhost:5005/contact/all-contacts/${currentUser._id}`
        );
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }

    getAllContacts();
  }, []);

  return (
    <div>
      <h2>Contacts</h2>
      <Link to="/create-a-contact">
        <button className="btn">Add new Contact</button>
      </Link>

      <section id="contact-page">
        {contacts.map((oneContact) => (
          <Link
            key={oneContact._id}
            to={`/contacts/detail/${oneContact._id}`}
            className="contact-card"
          >
            <div>
              {/* image */}
              {oneContact.image && (
                <img
                  src={oneContact.image}
                  alt={oneContact.name}
                  className="contact-avatar"
                />
              )}

              <p>{oneContact.name}</p>
              <p>{oneContact.email}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default ContactListPage;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ContactDetailsPage = () => {
  const [contactState, setContactState] = useState({});
  const { contactId } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    async function getOneContact() {
      try {
        const { data } = await axios.get(
          `http://localhost:5005/contact/single-contact/${contactId}`
        );
        console.log("Fetched contact:", data);
        setContactState(data);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }

    getOneContact();
  }, [contactId]);
  async function handleDelete() {
    try {
      const { data } = await axios.delete(
        `http://localhost:5005/contact/delete-a-contact/${contactId}`
      );

      nav("/contacts");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2>{contactState.name}’s Detail Page</h2>
      <p>Email: {contactState.email}</p>
      <p>Phone: {contactState.phoneNumber}</p>
      <p>Address: {contactState.address}</p>
      <img src={contactState.image} alt="contactImage" />

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ContactDetailsPage;

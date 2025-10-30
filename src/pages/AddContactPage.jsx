import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { Authcontext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/api.config";

const AddContactPage = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const { currentUser } = useContext(Authcontext);
  const [category, setCategory] = useState("");
  const nav = useNavigate();

  async function handleAddContact(e) {
    e.preventDefault();
    console.log("hello");
    try {
      const newContact = {
        name,
        email,
        phoneNumber,
        address,
        image,
        category,
        creator: currentUser._id,
      };
      const response = await axios.post(
        // "http://localhost:5005/contact/create-a-contact",//
        `${API_URL}/contact/create-a-contact`,
        newContact
      );
      console.log("Contact added:", response.data);
      nav("/contacts");
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  }
  return (
    <div>
      <h2>Add new Contact</h2>
      <form onSubmit={handleAddContact}>
        <label>
          Name:
          <input
            type="string"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          PhoneNumber:
          <input
            type="string"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <label>
          Address:
          <input
            type="string"
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </label>
        <label>
          Image:
          <input
            type="string"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">--Select Category--</option>
            <option value="Family">Family</option>
            <option value="Friend">Friend</option>
            <option value="Colleague">Colleague</option>
            <option value="Business">Business</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AddContactPage;

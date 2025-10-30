import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/api.config";

const EditContactPage = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const { contactId } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    async function getContactDetails() {
      try {
        const { data } = await axios.get(
          `${API_URLL}/contact/single-contact/${contactId}`
        );
        console.log(data);
        setName(data.name);
        setPhoneNumber(data.phoneNumber);
        setEmail(data.email);
        setAddress(data.address);
        setImage(data.image);
        setCategory(data.category);
      } catch (error) {
        console.log(error);
      }
    }
    getContactDetails();
  }, [contactId]);

  async function handleUpdateContact(e) {
    e.preventDefault();
    const updtedContact = {
      name,
      phoneNumber,
      email,
      address,
      image,
      category,
    };
    try {
      const { data } = await axios.put(
        `${API_URL}/contact/update-a-contact/${contactId}`,
        updtedContact
      );
      nav("/contacts");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {" "}
      <h2>Update Contact</h2>
      <form onSubmit={handleUpdateContact}>
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

export default EditContactPage;

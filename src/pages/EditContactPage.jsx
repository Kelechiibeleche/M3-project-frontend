import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditContactPage = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const { contactId } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    async function getContactDetails() {
      try {
        const { data } = await axios.get(
          `http://localhost:5005/contact/single-contact/${contactId}`
        );
        console.log(data);
        setName(data.name);
        setPhoneNumber(data.phoneNumber);
        setEmail(data.email);
        setAddress(data.address);
        setImage(data.image);
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
    };
    try {
      const { data } = await axios.put(
        `http://localhost:5005/contact/update-a-contact/${contactId}`,
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
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default EditContactPage;

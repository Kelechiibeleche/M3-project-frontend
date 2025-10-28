import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ContactListPage from "./pages/ContactListPage";
import ContactDetailsPage from "./pages/ContactDetailsPage";
import ContactNotesPage from "./pages/ContactNotesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddContactPage from "./pages/AddContactPage";
import EditContactPage from "./pages/EditContactPage";
import ProfilePage from "./pages/ProfilePage";
import RouteProtector from "./components/RouteProtector";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactListPage />} />
        <Route
          path="/contacts/detail/:contactId"
          element={<ContactDetailsPage />}
        />
        <Route
          path="/contacts/:contactId/notes"
          element={<ContactNotesPage />}
        />
        <Route path="/notFoundPage" element={<NotFoundPage />} />
        <Route path="/create-a-contact" element={<AddContactPage />} />
        <Route path="/contacts/edit/:contactId" element={<EditContactPage />} />
        <Route
          path="/profile"
          element={
            <RouteProtector>
              <ProfilePage />
            </RouteProtector>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

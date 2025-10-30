import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Authcontext } from "../context/AuthContext";
import { API_URL } from "../config/api.config";

const ProfilePage = () => {
  const [profileUser, setProfileUser] = useState({});
  const { currentUser } = useContext(Authcontext);

  useEffect(() => {
    async function getProfileUsersData() {
      try {
        const { data } = await axios.get(
          `${API_URL}/auth/profile/${currentUser?._id}`
        );
        setProfileUser(data);
      } catch (error) {
        console.log("Error fetching profile data:", error);
      }
    }

    getProfileUsersData();
  }, [currentUser?._id]);

  return (
    <div className="welcome-back">
      {profileUser?.username
        ? `Welcome Back, ${profileUser.username} 👋`
        : "Loading profile..."}
    </div>
  );
};

export default ProfilePage;

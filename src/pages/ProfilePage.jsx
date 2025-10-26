import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Authcontext } from "../context/AuthContext";

const ProfilePage = () => {
  const [profileUser, setProfileUser] = useState({});
  const { currentUser } = useContext(Authcontext);

  useEffect(() => {
    async function getProfileUsersData() {
      try {
        const { data } = await axios.get(
          `http://localhost:5005/auth/profile/${currentUser?._id}`
        );
        setProfileUser(data);
      } catch (error) {
        console.log("Error fetching profile data:", error);
      }
    }

    getProfileUsersData();
  }, [currentUser?._id]);

  return (
    <div>
      {profileUser?.username
        ? `${profileUser.username}'s Profile Page`
        : "Loading profile..."}
    </div>
  );
};

export default ProfilePage;

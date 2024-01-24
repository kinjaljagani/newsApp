import React from "react";

const Profile = () => {
  const profileDetails = JSON.parse(localStorage.getItem("profileDetails")) || {};
    return (
      <div className="container mt-5 pt-5">
      <h2>Profile Details</h2>
      <pre>{JSON.stringify(profileDetails, undefined, 2)}</pre>
    </div>
    );
  };
  
  export default Profile;
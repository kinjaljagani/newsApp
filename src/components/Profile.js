import React from "react";

const Profile = () => {
    
    return (
      <div className="container bg-dark-subtle mt-3 py-5">
        <h3 className="bg-primary p-2 text-center">Welcome to Profile page</h3>
        <div className="row ">
          <div className="col p-2 px-3">
            <h5>
              First Name : {" "}
              {localStorage.getItem("fname")?localStorage.getItem("fname"):"NA"}
            </h5>
            <h5>
              Last Name : {" "}
              {localStorage.getItem("lname")?localStorage.getItem("lname"):"NA"}
            </h5>
            <h5>
              First Name : {" "}
              {localStorage.getItem("email")?localStorage.getItem("email"):"NA"}
            </h5>
            <h5>
              First Name : {" "}
              {localStorage.getItem("password")?localStorage.getItem("password"):"NA"}
            </h5>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;

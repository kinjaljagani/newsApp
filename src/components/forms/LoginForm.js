import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    if (fname === "") {
      toast.error("First Name is required");
    } else if (lname === "") {
      toast.error("Last Name is required");
    } else if (email === "") {
      toast.error("Email is required");
    } else if (password === "") {
      toast.error("Password is required");
    } else {
      localStorage.setItem("fname", fname);
      localStorage.setItem("lname", lname);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      navigate("/profile");
    }

    const newEntry = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };
  return (
    <div>
      <form className="px-4 py-5 my-4" onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            className="form-control"
            id="fname"
            placeholder="Enter your first name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            className="form-control"
            id="lname"
            placeholder="Enter your Last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          {/* <div className="form-check">
        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
        <label className="form-check-label" htmlFor="dropdownCheck">
          Remember me
        </label>
      </div> */}
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <div>
        {allEntry.map((curElem) => {
          return (
            <div className="container w-50">
              <div className="row">
                <div className="col d-flex shadow bg-primary px-5 py-2 align-items-center justify-content-between m-auto">
                  <p className="m-0">{curElem.fname}</p>
                  <p className="m-0">{curElem.lname}</p>
                  <p className="m-0">{curElem.email}</p>
                  <p className="m-0">{curElem.password}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="dropdown-divider"></div>
  <a className="dropdown-item" href="/">New around here? Sign up</a>
  <a className="dropdown-item" href="/">Forgot password?</a> */}
    </div>
  );
};

export default LoginForm;

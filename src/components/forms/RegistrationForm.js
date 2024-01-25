import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const initialValues = { fname: "", lname: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  
    // Clear the error for the current field
    setFormErrors({ ...formErrors, [name]: "" });
  };
  

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  
    // Check if any field has a value
    const hasValue =
      formValues.fname.trim() &&
      formValues.lname.trim() &&
      formValues.email.trim() &&
      formValues.password.trim();
  
    // Check if there are no errors and at least one field has a value
    if (
      !formErrors.fname &&
      !formErrors.lname &&
      !formErrors.email &&
      !formErrors.password &&
      hasValue
    ) {
      // If there are no errors and at least one field has a value, submit the form
      localStorage.setItem("profileDetails", JSON.stringify(formValues));
      navigate("/profile");
    }
  };
  

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (value) => {
    const formErrors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  
    if (!value.fname) {
      formErrors.fname = "First name is required!";
    }
  
    if (!value.lname) {
      formErrors.lname = "Last name is required!";
    }
  
    if (!value.email) {
      formErrors.email = "Email id is required!";
    } else if (!regex.test(value.email)) {
      formErrors.email = "This is not a valid email format!";
    }
  
    if (!value.password) {
      formErrors.password = "Password is required!";
    } else if (value.password.length < 4) {
      formErrors.password = "Password must be more than 4 characters!";
    } else if (value.password.length > 10) {
      formErrors.password = "Password must be less than 10 characters!";
    }
  
    return formErrors;
  };
  
  

  return (
    <div className="container mt-5 pt-5">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui success message">Signed in success</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
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
            autoComplete="off"
            placeholder="Enter your first name"
            value={formValues.fname}
            onChange={handleChange}
          />
        </div>
        <p className="text-danger">{formErrors.fname}</p>
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
            value={formValues.lname}
            onChange={handleChange}
          />
        </div>
        <p className="text-danger">{formErrors.lname}</p>
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
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p className="text-danger">{formErrors.email}</p>
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
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p className="text-danger">{formErrors.password}</p>
        <div className="mb-3"></div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

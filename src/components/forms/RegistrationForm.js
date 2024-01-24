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
  };
  
  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0) {
      localStorage.setItem("profileDetails", JSON.stringify(formValues));
      // If there are no errors, redirect to the profile page
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
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!value.fname) {
      errors.fname = "First name is required!";
    }
    if (!value.lname) {
      errors.lname = "Last name is required!";
    }
    if (!value.email) {
      errors.email = "Email id is required!";
    }else if(!regex.test(value.email)){
        errors.email = "this is not a valid email format!";
    }
    if (!value.password) {
      errors.password = "First name is required!";
    }else if(value.password.length < 4){
        errors.password = "password must be more then 4 character!";
    }else if(value.password.length > 10){
        errors.password = "password must be less then 10 character!";
    }
    return {};
  };
  return (
    <div className="container mt-5 pt-5">
        {Object.keys(formErrors).length === 0 && isSubmit?(<div className="ui success message">Signed in sucess</div>):(<pre>{JSON.stringify(formValues, undefined, 2)}</pre>)}
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
        <div className="mb-3">
          
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      
      
    </div>
  );
};

export default LoginForm;

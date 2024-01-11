import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const initialValues = { fname: "", lname: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  //   const [allEntry, setAllEntry] = useState([]);
  //   const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // if (fname === "") {
    //   toast.error("First Name is required");
    // } else if (lname === "") {
    //   toast.error("Last Name is required");
    // } else if (email === "") {
    //   toast.error("Email is required");
    // } else if (password === "") {
    //   toast.error("Password is required");
    // } else {
    //   localStorage.setItem("fname", fname);
    //   localStorage.setItem("lname", lname);
    //   localStorage.setItem("email", email);
    //   localStorage.setItem("password", password);
    //   navigate("/profile");
    // }

    // const newEntry = {
    //   fname: fname,
    //   lname: lname,
    //   email: email,
    //   password: password,
    // };
    // setAllEntry([...allEntry, newEntry]);
    // console.log(allEntry);
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
    return errors;
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
      {/* <div>
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
      </div> */}
      {/* <div className="dropdown-divider"></div>
  <a className="dropdown-item" href="/">New around here? Sign up</a>
  <a className="dropdown-item" href="/">Forgot password?</a> */}
    </div>
  );
};

export default LoginForm;

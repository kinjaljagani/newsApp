import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "../../schemas";

const FormikForm = () => {
  const initialValues = { fname: "", lname: "", email: "", password: "" };
  const navigate = useNavigate();

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    validationSchema: signUpSchema,  // Assuming you have a validation schema
    onSubmit: (formValues) => {
      // Your form submission logic goes here
      // For example, you can save the formValues to localStorage
      localStorage.setItem("profileDetails", JSON.stringify(formValues));

      // After successful submission, navigate to the profile page
      navigate("/profile");
    },
  });

  return (
    <div className="container mt-5 pt-5">
      <form className="px-4 py-5 my-4" onSubmit={handleSubmit}>
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
            value={values.fname}
            onChange={handleChange}
          />
        </div>
        <p className="text-danger">{errors.fname}</p>
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
            value={values.lname}
            onChange={handleChange}
          />
        </div>
        <p className="text-danger">{errors.lname}</p>
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
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <p className="text-danger">{errors.email}</p>
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
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <p className="text-danger">{errors.password}</p>
        <div className="mb-3"></div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default FormikForm;

import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "../../schemas";
import { signUpBankSchema } from "../../schemas";

const FormikForm = () => {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    banks: [{ accno: "", accname: "", ifsc: "", bankname: "" }],
    checkbox: false, // Add a checkbox field to initialValues
  };

  const navigate = useNavigate();
  // const validationSchema = initialValues.checkbox ? signUpSchema : signUpBankSchema;
  const { handleChange, handleSubmit, values, errors, touched, setFieldTouched, setFieldValue } = useFormik({
    initialValues,
    validationSchema: () => (values.checkbox ? signUpSchema : signUpBankSchema),
    onSubmit: (formValues) => {
      localStorage.setItem("profileDetails", JSON.stringify(formValues));
      navigate("/profile");
    },
  });

  const handleAddBank = () => {
    setFieldValue("banks", [...values.banks, { accno: "", accname: "", ifsc: "", bankname: "" }]);
  };
  const handleRemoveBank = () => {
    if (values.banks.length > 1) {
      setFieldValue("banks", values.banks.slice(0, -1));
    }
  };



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
            onBlur={() => setFieldTouched(`fname`, true)}
          />
          <p className="text-danger">{touched.fname && errors.fname}</p>
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
            value={values.lname}
            onChange={handleChange}
            onBlur={() => setFieldTouched(`lname`, true)}
          />
          <p className="text-danger">{touched.lname && errors.lname}</p>
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
            value={values.email}
            onChange={handleChange}
            onBlur={() => setFieldTouched(`email`, true)}
          />
          <p className="text-danger">{touched.email && errors.email}</p>
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
            value={values.password}
            onChange={handleChange}
            onBlur={() => setFieldTouched(`password`, true)}
          />
          <p className="text-danger">{touched.password && errors.password}</p>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="checkbox"
            checked={values.checkbox}
            value={values.checkbox}
            id="checkbox"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="checkbox">
            is required Acc no?
          </label>
        </div>
        <div>
          {values.banks.map((bank, index) => (
            <div key={index} className="d-flex">
              <div className="m-3">
                <label htmlFor={`banks[${index}].accno`} className="form-label">
                  Account number
                </label>
                <input
                  type="text"
                  name={`banks[${index}].accno`}
                  className="form-control"
                  id={`banks[${index}].accno`}
                  autoComplete="off"
                  placeholder="Enter your Account Number"
                  value={bank.accno}
                  onChange={handleChange}
                  onBlur={() => setFieldTouched(`banks[${index}].accno`, true)}
                />
                <p className="text-danger">{touched.banks && touched.banks[index]?.accno && errors.banks && errors.banks[index]?.accno}</p>
              </div>
              <div className="m-3">
                <label htmlFor={`banks[${index}].accname`} className="form-label">
                  Name of Account Holder
                </label>
                <input
                  type="text"
                  name={`banks[${index}].accname`}
                  className="form-control"
                  id={`banks[${index}].accname`}
                  autoComplete="off"
                  placeholder="Enter name of account holder"
                  value={bank.accname}
                  onChange={handleChange}
                  onBlur={() => setFieldTouched(`banks[${index}].accname`, true)}
                />
                <p className="text-danger">{touched.banks && touched.banks[index]?.accname && errors.banks && errors.banks[index]?.accname}</p>
              </div>
              <div className="m-3">
                <label htmlFor={`banks[${index}].ifsc`} className="form-label">
                  IFSC code
                </label>
                <input
                  type="text"
                  name={`banks[${index}].ifsc`}
                  className="form-control"
                  id={`banks[${index}].ifsc`}
                  autoComplete="off"
                  placeholder="Enter IFSC code"
                  value={bank.ifsc}
                  onChange={handleChange}
                  onBlur={() => setFieldTouched(`banks[${index}].ifsc`, true)}
                />
                <p className="text-danger">{touched.banks && touched.banks[index]?.ifsc && errors.banks && errors.banks[index]?.ifsc}</p>
              </div>
              <div className="m-3">
                <label htmlFor={`banks[${index}].bankname`} className="form-label">
                  Enter Bank Name
                </label>
                <input
                  type="text"
                  name={`banks[${index}].bankname`}
                  className="form-control"
                  id={`banks[${index}].bankname`}
                  autoComplete="off"
                  placeholder="Enter Bank name"
                  value={bank.bankname}
                  onChange={handleChange}
                  onBlur={() => setFieldTouched(`banks[${index}].bankname`, true)}
                />
                <p className="text-danger">{touched.banks && touched.banks[index]?.bankname && errors.banks && errors.banks[index]?.bankname}</p>
              </div>
            </div>
          ))}

          <button type="button" className="btn btn-primary mx-1" onClick={handleAddBank}>
            Add Bank
          </button>

          <button type="button" className="btn btn-primary mx-1" onClick={handleRemoveBank}>
            Remove Bank
          </button>
        </div>

        <button type="submit" className="btn btn-primary m-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default FormikForm;
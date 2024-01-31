import * as Yup from "yup";

export const signUpSchema = Yup.object({
  fname: Yup.string().min(2).max(25).required("Please enter your first name"),
  lname: Yup.string().min(2).max(25).required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).max(10).required("Please enter your password"),
  checkbox: Yup.boolean(),
  banks: Yup.array().of(
    Yup.object({
      accno: Yup.string()
        .matches(/^[0-9]+$/, "Account number must contain only numbers")
        .min(6)
        .max(10)
        .required("Please enter a valid account number"),
      accname: Yup.string().min(2).max(25).required("Please enter the account holder's name"),
      ifsc: Yup.string().min(6).max(12).required("Please enter a valid IFSC code"),
      bankname: Yup.string().min(6).max(25).required("Please enter the bank name"),
    })
  ),
});

export const signUpBankSchema = Yup.object({
  fname: Yup.string().min(2).max(25).required("Please enter your first name"),
  lname: Yup.string().min(2).max(25).required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).max(10).required("Please enter your password"),
  checkbox: Yup.boolean(),
  banks: Yup.array().of(
    Yup.object({
      accno: Yup.string()
        .matches(/^[0-9]+$/, "Account number must contain only numbers")
        .min(6)
        .max(10)
        .required("Please enter a valid account number"),
      accname: Yup.string(),
      ifsc: Yup.string(),
      bankname: Yup.string(),
    })
  ),
});

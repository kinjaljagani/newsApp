import * as Yup from "yup";


export const signUpSchema = Yup.object({
    fname:Yup.string().min(2).max(25).required("please enter your fname"),
    lname:Yup.string().min(2).max(25).required("please enter your lname"),
    email:Yup.string().email().required("please enter your email"),
    password:Yup.string().min(6).max(10).required("please enter your password"),
});
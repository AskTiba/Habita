import * as yup from "yup";

export const fromSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Username must be atleast 5 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be atleast 8 characters"),
});

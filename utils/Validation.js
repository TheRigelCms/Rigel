import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Your full name is a required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("An email address is require"),
  password: yup
    .string()
    .matches(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
      "Password should have 8 characters, one capital letter and one number."
    ),
  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("An email address is require"),
  password: yup.string().required("A password is require"),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .matches(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
      "Password should have 8 characters, one capital letter and one number."
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const forgotSchema = yup.object().shape({
  email: yup.string().email().required(),
});

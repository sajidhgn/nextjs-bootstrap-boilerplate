import * as Yup from "yup";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaSnapchat,
  FaTiktok,
  FaTimesCircle,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaFacebook, FaThreads } from "react-icons/fa6";

export const basicFormValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  license_or_certification_name: Yup.string().required(
    "License certification name is required"
  ),
  license_number: Yup.string().required("License number is required"),
  contact_no: Yup.string().required("Phone number is required"),
  primary_address: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  zipcode: Yup.string().required("Zipcode is required"),
  gender: Yup.string().required("Gender is required"),
});

export const basicFormSchema = [
  {
    name: "first_name",
    as: "input",
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
  },
  {
    name: "middle_name",
    as: "input",
    label: "Middle Name",
    type: "text",
    placeholder: "Enter your middle name",
  },
  {
    name: "last_name",
    as: "input",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
  },
  {
    name: "license_or_certification_name",
    as: "input",
    label: "License Or Certification Name",
    type: "text",
    placeholder: "Enter license Or certification name",
  },
  {
    name: "license_number",
    as: "input",
    label: "License Number",
    type: "text",
    placeholder: "Enter license number",
  },
  {
    name: "states_licensed",
    as: "input",
    label: "States Licensed",
    type: "multiselect",
    placeholder: "Enter states licensed",
  },
  {
    name: "contact_no",
    as: "input",
    label: "Phone Number",
    type: "text",
    placeholder: "Enter phone number",
  },
  {
    name: "password",
    as: "input",
    label: "Password",
    type: "password",
    placeholder: "Enter password",
  },
  {
    name: "website",
    as: "input",
    label: "Website",
    type: "text",
    placeholder: "Enter website",
  },
  {
    name: "about_you",
    as: "textarea",
    type: "textarea",
    label: "About You",
    rows: "4",
    placeholder: "Write here",
  },
];

export const genderList = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

// ONLINE FORM DATA

export const onlineFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  contact_no: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  locations: Yup.array().of(
    Yup.object().shape({
      location: Yup.string().required("Location is required")
    })
  ),
});


// Social Media Links

export const socialLinks = [
  {
    title: "Facebook",
    icon: <FaFacebook style={{ color: "#3c579e", fontSize: "25px" }} />,
    name: "facebook",
    value: "",
  },
  {
    title: "Twitter",
    icon: <FaTwitter style={{ color: "#1DA1F2", fontSize: "25px" }} />,
    name: "twitter",
    value: "",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin style={{ color: "#0077B5", fontSize: "25px" }} />,
    name: "linkedin",
    value: "",
  },
  {
    title: "Reddit",
    icon: <FaReddit style={{ color: "#FF4500", fontSize: "25px" }} />,
    name: "reddit",
    value: "",
  },
  {
    title: "TikTok",
    icon: <FaTiktok style={{ color: "#000000", fontSize: "25px" }} />,
    name: "tiktok",
    value: "",
  },
  {
    title: "Snapchat",
    icon: <FaSnapchat style={{ color: "#FFFC00", fontSize: "25px" }} />,
    name: "snapchat",
    value: "",
  },
  {
    title: "Instagram",
    icon: <FaInstagram style={{ color: "#E4405F", fontSize: "25px" }} />,
    name: "instagram",
    value: "",
  },
  {
    title: "Youtube",
    icon: <FaYoutube style={{ color: "#FF0000", fontSize: "25px" }} />,
    name: "youtube",
    value: "",
  },
  {
    title: "Pinterest",
    icon: <FaPinterest style={{ color: "#BD081C", fontSize: "25px" }} />,
    name: "pinterest",
    value: "",
  },
  {
    title: "Discord",
    icon: <FaDiscord style={{ color: "#7289DA", fontSize: "25px" }} />,
    name: "discord",
    value: "",
  },
  {
    title: "Threads",
    icon: <FaThreads style={{ color: "#000000", fontSize: "25px" }} />,
    name: "threads",
    value: "",
  },
  {
    title: "Other",
    icon: <FaTimesCircle style={{ color: "#FF0000", fontSize: "25px" }} />,
    name: "other",
    value: "",
  },
];

export const groupFormValidationSchema = Yup.object().shape({
  groups: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required("Title is required"),
      link_to_connect: Yup.string().required("Link is required"),
    })
  ),
});

export const groupdForminitialValues = {
  groups: [
    {
      title: "",
      description: "",
      link_to_connect: "",
    },
  ],
};

// SignUp Form

export const signInFormValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const signInFormInitialValues = {
  email: "",
  password: "",
};

// Login Form

export const signUpFormValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const signUpFormInitialValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
};

// Forgot Password

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const forgotPasswordInitialValues = {
  email: "",
};

export const verificationCodeValidationSchema = Yup.object().shape({
  verification_code: Yup.string()
    .required("Verification code is required")
    .max(6, "Verification code must be 6 digits")
    .min(6, "Verification code must be 6 digits"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  confirm_password: Yup.string()
    .test({
      name: "passwords-match",
      message: "Password must match",
      test: function (value) {
        return this.parent.password === value;
      },
    })
    .required("Confirm Password is required"),
});

export const verificationCodeInitialValues = {
  verification_code: "",
};

export const resetPasswordInitialValues = {
  password: "",
};

export const online_services_options = [
  { value: "group-therapy", label: "Group Therapy" },
  { value: "individual-therapy", label: "Individual Therapy" },
  { value: "coaching", label: "Coaching" },
  { value: "group-coaching", label: "Group Coaching" },
  { value: "psychoeducational-groups", label: "Psychoeducational Groups" },
  { value: "support-groups", label: "Support Groups" },
  { value: "peer-groups", label: "Peer Groups" },
  { value: "substance-abuse-groups", label: "Substance Abuse Groups" },
  { value: "retreats", label: "Retreats" },
  { value: "process-groups", label: "Process Groups" },
];

export const treatementOrienationvalidationSchema = Yup.object().shape({
  group_rate: Yup.number()
    .min(0, "Must be greater than or equal to 0")
    .test(
      "at-least-one",
      "Group Rate or Individual Rate is required",
      function (value) {
        const { individual_rate } = this.parent;
        return value > 0 || individual_rate > 0;
      }
    ),
  individual_rate: Yup.number()
    .min(0, "Must be greater than or equal to 0")
    .test(
      "at-least-one",
      "Group Rate or Individual Rate is required",
      function (value) {
        const { group_rate } = this.parent;
        return value > 0 || group_rate > 0;
      }
    ),
});

export const blogFormValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
});

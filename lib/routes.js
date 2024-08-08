const signupBase = "/profile";
const routes = {
  home: "/",
  blogs: "/blogs",
  services: "/",
  podcasts: "/podcasts",
  aboutus2: "/aboutus2",
  contactus: "/contact-us",
  podcasts: "/podcasts",
  signup: "/signup",
  login: "/login",
  forgotPassword: "/forgot-password",
  verificationCode: "/verification-code",
  resetPassword: "/resetPassword",
  userprofile: "/user",
  signup_steps: {
    basicInfo: `${signupBase}/basic-info-and-office-details`,
    practice: `${signupBase}/practice-and-insurance-details`,
    current_groups: `${signupBase}/current-groups-open-for-enrollment`,
    online_services: `${signupBase}/online-service-and-practice-details-with-insurance-list`,
    treatment_speciality: `${signupBase}/treatment-and-specialities`,
    blog: `${signupBase}/blogs`,
    blogCreate: `${signupBase}/blogs/create`,
    blogsList: `${signupBase}/blogs/list`,
    resetPassword: `${signupBase}/reset-password`,
  },
  // api: {
  //   baseApiUrl: process.env.NEXT_PUBLIC_API_URL,
  //   commApiUrl: process.env.NEXT_PUBLIC_API_URL + "/api",
  //   singleEntityUrl: "/api/slugify/slugs",
  // },
};
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export { routes };
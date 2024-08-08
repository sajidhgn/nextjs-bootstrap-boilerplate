import httpClient from "./api/httpClient";

function AuthService() {
  return {
    // SignUp Steps
    add_basicInfo: (values) => {
      return httpClient.put(`/auth/basic-info/${values.userId}`, values);
    },
    edit_basicInfo: (userId) => {
      return httpClient.get(`/auth/basic-info/${userId}`);
    },
    add_practiceDetails: (values) => {
      return httpClient.post("/auth/practice-details", values);
    },
    edit_practiceDetails: (userId) => {
      return httpClient.get(`/auth/practice-details/${userId}`);
    },
    add_selfpayscale: (values) => {
      return httpClient.post("/auth/selfpayscale", values);
    },
    edit_selfpayscale: (userId) => {
      return httpClient.get(`/auth/selfpayscale/${userId}`);
    },
    add_mediaGroups: (values) => {
      return httpClient.post("/auth/media-groups", values);
    },
    edit_mediaGroups: (userId) => {
      return httpClient.get(`/auth/media-groups/${userId}`);
    },
    verifyUser: (values) => {
      return httpClient.post("/auth/verify-user", values);
    },
    verifyUserRedirection: (values) => {
      return httpClient.post("/auth/add-basic-details", values);
    },
    signUp: (values) => {
      return httpClient.post("/auth/sign-up", values);
    },
    login: (values) => {
      return httpClient.post("/auth/login", values);
    },
    logout: (values) => {
      return httpClient.post(`/auth/logout`, values);
    },
    forgotPassword: (values) => {
      return httpClient.post("/auth/forgot-password", values);
    },
    verifyCode: (values) => {
      return httpClient.post("/auth/verify-code", values);
    },
    resetPassword: (values) => {
      return httpClient.post("/auth/reset-password", values);
    },
  };
}

export default AuthService();

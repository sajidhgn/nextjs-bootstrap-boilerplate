import httpClient from "./api/httpClient";

function GeneralService() {
  return {
    getCountries: () => {
      return httpClient.get(`/countries`);
    },
    getStates: (values) => {
      return httpClient.post(`/states`, values);
    },
    getCities: (values) => {
      return httpClient.post(`/cities`, values);
    },
    getInsuranceList: (values) => {
      return httpClient.get(`/insurance-list`, values);
    },
    getTreatmentOrientations: (values) => {
      return httpClient.get(`/treatment-orientations`, values);
    },
    getSpecialities: (values) => {
      return httpClient.get(`/specialities`, values);
    },
    getUserProfileSteps: (user_id) => {
      return httpClient.get(`/edit-steps/${user_id}`);
    },
    addUserProfileSteps: (values) => {
      return httpClient.post(`/add-steps`, values);
    },
    updateUserProfileSteps: (values) => {
      return httpClient.put(`/update-steps/${values.user_id}`, values);
    },
    checkUserProfileSteps: (user_id) => {
      return httpClient.get(`/status-steps/${user_id}`);
    },
    uploadImage: (values) => {
      return httpClient.post("/upload", values);
    },
  };
}

export default GeneralService();

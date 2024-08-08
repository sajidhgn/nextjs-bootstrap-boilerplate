import httpClient from "./api/httpClient";

function UserService() {
  return {
    getByUUID: (id) => {
      return httpClient.get(`/user/get-by-uuid/${id}`);
    },
    getStatusByUUID: (id) => {
      return httpClient.get(`/user/get-status-by-uuid/${id}`);
    }
  };
}

export default UserService();

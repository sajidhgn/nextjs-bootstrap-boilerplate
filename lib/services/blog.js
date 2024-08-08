import httpClient from "./api/httpClient";

function BlogService() {
  return {
    addBlog: (values) => {
      return httpClient.post(`/add-post`, values);
    },
    getBlog: (id) => {
      return httpClient.get(`/edit-post/${id}`);
    },
    getByTitle: (title) => {
      return httpClient.get(`/get-by-title/${title}`);
    },
    updateBlog: (values) => {
      return httpClient.put(`/update-post/${values.id}`, values);
    },
    deleteBlog: (values) => {
      return httpClient.delete(`/delete-post/${values.id}`);
    },
    getAllBlogs: (user_id, page) => {
      return httpClient.post(`/all-posts?page=${page}`, user_id);
    },
    getAllPosts: (page) => {
      return httpClient.get(`/all-posts?page=${page}`);
    },
  };
}

export default BlogService();

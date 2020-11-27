import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8001",
  // baseURL: "https://tinder-clone-backend-v2.herokuapp.com",
});

export default instance;

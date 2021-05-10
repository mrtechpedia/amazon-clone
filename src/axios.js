import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-e3ab9.cloudfunctions.net/api", // cloud function
  // baseURL: "http://localhost:5001/challenge-e3ab9/us-central1/api",
});

// https://us-central1-challenge-e3ab9.cloudfunctions.net/api

export default instance;

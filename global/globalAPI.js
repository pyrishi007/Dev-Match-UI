//==LIBRARY IMPORTS==
import axios from "axios";

//MAKING AS BASE URL WITH AUTHRIZATION
const axiosClient = axios.create({
  baseURL: "http://localhost:4000/",
});

export const loggedInUser = (data) =>
  axiosClient.post("/auth/login", data, { withCredentials: true });

export const logoutUser = () =>
  axiosClient.post("/auth/logout", { withCredentials: true });

export const getUser = () =>
  axiosClient.get("/profile/view", { withCredentials: true });

export const editProfle = (data) =>
  axiosClient.post("/profile/edit", data, { withCredentials: true });

export const allConnections = () =>
  axiosClient.get("/user/connections", { withCredentials: true })

export const requestFeed = () =>
  axiosClient.get("/user/requestFeed", { withCredentials: true })

export const actionRequest = (status, connectionId) =>
  axiosClient.post(`/request/receive/${status}/${connectionId}`, {}, { withCredentials: true })

export const userFeed = () =>
  axiosClient.get("/user/feed", { withCredentials: true })
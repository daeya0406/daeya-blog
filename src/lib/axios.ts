import axios from "axios";

export const api = axios.create({
  baseURL: "https://daeya-blog.fly.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
});

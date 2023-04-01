import axios from "axios";

const env = {
  URL: "https://api.jdoodle.com/v1",
};

export const req = axios.create({
  baseURL: env.URL,
});

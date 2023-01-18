import axios from "axios";

const options = {
  params: { maxResults: "50", regionCode: "IN" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_REACT_APP_RAPID_API_HOST,
  },
};

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const fetchFromAPI = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);
  const { data } = response;
  return data;
};

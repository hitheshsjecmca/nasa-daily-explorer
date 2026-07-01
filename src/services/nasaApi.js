import axios from "axios";

const API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = import.meta.env.VITE_NASA_API_KEY; 

export const fetchAPOD = async (date = "") => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        api_key: API_KEY,
        date: date,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
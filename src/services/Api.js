import axios from "axios";

let apiUrl = "http://80.242.58.170:8000/api/v1/events";

export const fetchDataFromAPI = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Error loading data");
  }
};

export const fetchInitialDataFromAPI = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error("Error loading data");
  }
};

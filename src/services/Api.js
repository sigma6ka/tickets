import axios from "axios";

const API_URL_1 = "http://212.111.87.198:8000/api/v1/events";
const API_URL_2 = "https://api.example.org/api2/data";

export const fetchDataFromAPI1 = async () => {
  try {
    const response = await axios.get(API_URL_1);
    return response.data.results;
  } catch (error) {
    throw new Error("Ошибка при загрузке данных из API 1");
  }
};

export const fetchDataFromAPI2 = async () => {
  try {
    const response = await axios.get(API_URL_2);
    return response.data;
  } catch (error) {
    throw new Error("Ошибка при загрузке данных из API 2");
  }
};

// src/services/weatherService.js
import axios from 'axios';
import { API_KEY, API_URL } from '../config';

const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('city-not-found');
    }
    throw new Error('api-error');
  }
};

export { fetchWeatherData };

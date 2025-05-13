const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const img_link = 'https://openweathermap.org/img/wn/';

export const weatherVideos = {
  Clear: '/clear.mp4',
  Clouds: '/cloud.mp4',
  Rain: '/rain.mp4',
  Snow: '/snow.mp4',
  Thunderstorm: '/thunder.mp4',
  Mist: '/mist.mp4',
};

export { API_KEY, API_URL, img_link };

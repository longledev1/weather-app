import { useState } from 'react';
import SearchBar from './components/Searchbar';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { fetchWeatherData } from './services/WeatherServices';
import WeatherCard from './components/Weather Card';
import { weatherVideos } from './config';
function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const background = weatherVideos[weather?.weather?.[0]?.main];

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
    } catch (error) {
      if (error.message === 'city-not-found') {
        setError('City not found, please try again!');
        setWeather(null);
      } else {
        setError('An error occurred. Please try again later!');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[url(/default.png)] bg-blue-100 bg-cover bg-center flex flex-col justify-center items-center relative overflow-hidden w-full">
        <video
          autoPlay
          loop
          muted
          key={background}
          className="absolute left-0 top-0 w-full h-full object-cover"
        >
          <source src={background} type="video/mp4" />
        </video>
        <div className="p-8 rounded-lg text-white shadow-lg max-w-md bg-black/80 z-10 w-50% md:w-full ">
          <h1 className="text-3xl text-center font-bold mb-6">Weather App</h1>
          <SearchBar error={error} fetchWeather={fetchWeather}></SearchBar>
          {loading && (
            <center>
              <AiOutlineLoading3Quarters className="animate-spin text-center mb-4"></AiOutlineLoading3Quarters>
            </center>
          )}
          <div className="text-center text-yellow-200 font-bold">
            {error && error}
          </div>
          {weather && <WeatherCard weather={weather}></WeatherCard>}
        </div>
      </div>
    </>
  );
}

export default App;

import { img_link } from '../config';

function WeatherCard({ weather }) {
  console.log(weather);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold">
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="text-center flex justify-center items-center mt-4">
        <img
          src={`${img_link}${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="w-16 h-16"
        />
        <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className="text-center text-gray-300 capitalize">
        {weather.weather[0].description}
      </p>

      {/* INFO */}
      <div className="mt-6 grid grid-cols-2 place-items-center gap-4">
        <div>
          <p className="text-gray-400">Humidity</p>
          <p className="font-bold">{weather.main.humidity}%</p>
        </div>{' '}
        <div>
          <p className="text-gray-400">Wind</p>
          <p className="font-bold">{weather.wind.speed}m/s</p>
        </div>{' '}
        <div>
          <p className="text-gray-400">Pressure</p>
          <p className="font-bold">{weather.main.pressure}hPa</p>
        </div>{' '}
        <div>
          <p className="text-gray-400">Humidity</p>
          <p className="font-bold">{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;

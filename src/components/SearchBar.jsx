import { useState } from 'react';
function SearchBar({ fetchWeather }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather(city);
      setCity('');
    } else {
      return;
    }
  };

  return (
    <form action="" className="flex mb-6" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 border border-gray-500 outline-none p-2 rounded-l-lg border-r-0 "
      />
      <button
        className="bg-blue-500 p-2 hover:bg-blue-600  cursor-pointer border border-gray-500  border-l-0 rounded-r-lg"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;

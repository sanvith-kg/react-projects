import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setdata] = useState("");
  const [city, setcity] = useState("");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d322ae762701fc4b579331bfbf8e6750`;
  const task = async () => {
    const res = await axios.get(url);
    setdata(res.data);
  };

  return (
    <div>
      <h1>weather app</h1>
      <input
        value={city}
        onChange={(e) => setcity(e.target.value)}
        type="text"
        placeholder="enter city name"
        name=""
        id=""
      />
      <button onClick={task}>Search</button>
      <h2>City: {data?.name}</h2>
      <h3>Temperature: {data?.main?.temp} °C</h3>
      <h3>Humidity: {data?.main?.humidity}%</h3>
    </div>
  );
};

export default App;

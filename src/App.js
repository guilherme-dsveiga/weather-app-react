import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/card";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getWeather } from "./api/weather";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFound, setIsFound] = useState(false);

  const getCityWheaterData = async () => {
    setIsLoading(true);
    const cityWeatherData = await getWeather(city);
    if (cityWeatherData.code) {
      setIsFound(false);
    } else {
      console.log(weatherData[weatherData.length - 1]?.cod);
      if (weatherData[weatherData.length - 1]?.cod === "404") {
        console.log(weatherData);
        let temp = [...weatherData];
        temp.pop();
        setWeatherData(() => [...temp, cityWeatherData]);
      } else {
        setWeatherData((prev) => [...prev, cityWeatherData]);
      }
      setIsFound(true);
    }
    setIsLoading(false);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      getCityWheaterData();
      setCity("");
    }
  };

  const removeCityWeatherData = (city) => {
    let weatherDataCopy = weatherData.filter((w) => {
      return w.name !== city;
    });
    setWeatherData(weatherDataCopy);
  };

  return (
    <div className="App">
      <div className="upper-container">
        <h1 onClick={refreshPage}>React Clima</h1>
        <div className="form-container">
          <div className="label-input-container">
            <label htmlFor="city">Digite o nome da cidade:</label>
            <input
              id="input"
              onKeyPress={handleKeypress}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              name="city"
            ></input>
          </div>
          <button type="submit" onClick={getCityWheaterData}>
            +
          </button>
        </div>
        <div className="space-between">
          <div className="cards-container">
            {weatherData.map((item, key) => (
              <Card
                key={key}
                name={item.name}
                main={item.weather ? item.weather[0].main : ""}
                temp={item.main ? item.main.temp : ""}
                min={item.main ? item.main.temp_min : ""}
                max={item.main ? item.main.temp_max : ""}
                remove={removeCityWeatherData}
              />
            ))}
            {isLoading && <CircularProgress />}
          </div>
          <footer>
            Feito com{" "}
            <span role="img" aria-label="coração">
              ❤️
            </span>{" "}
            por Guilherme Veiga
            <br />
            Aplicativo feito para a finalidade de estudo da biblioteca ReactJS{" "}
            <br />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

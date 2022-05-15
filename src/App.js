import "./App.css";
import Weather from "./Weather";
import React, { useState, useRef } from "react";
import Card from "./components/card";
import CircularProgress from "@material-ui/core/CircularProgress";

let cityListHandler = [];

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [renderState, setRenderState] = useState(false);
  const [deleteLast, setDeleteLast] = useState(false);
  const [loadingHandler, setLoadingHandler] = useState("none");
  const [cityFoundHandler, setCityFoundHandler] = useState("none");

  let cityInput = useRef();

  const callFetch = async () => {
    const loadWeather = async (param) => {
      let data = await Weather.getWeather(param);

      if (deleteLast === true) {
        data.splice(index, 1);
        cityListHandler.splice(index, 1);
        setDeleteLast(false);
      }

      setWeatherData(data);
      setRenderState(true);
      setLoadingHandler("none");
      if ((data[index + 1] ? data[index + 1].name : "") === undefined) {
        setDeleteLast(true);
      }
    };

    setLoadingHandler("block");

    let city = cityInput.current.value;
    cityListHandler.push(city);
    let index = cityListHandler.length - 2;

    loadWeather(cityListHandler);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      callFetch();
    }
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
              ref={cityInput}
              type="text"
              name="city"
            ></input>
          </div>
          <button type="submit" onClick={callFetch}>
            +
          </button>
          <div className="cityFound" style={{ display: cityFoundHandler }}>
            Cidade não encontrada
          </div>
        </div>
        <div className="space-between">
          <div className="cards-container">
            {weatherData.map((item, key) => (
              <Card
                key={key}
                isRender={renderState}
                name={item.name}
                main={item.weather ? item.weather[0].main : ""}
                temp={item.main ? item.main.temp : ""}
                min={item.main ? item.main.temp_min : ""}
                max={item.main ? item.main.temp_max : ""}
              />
            ))}
            <div className="is-loading" style={{ display: loadingHandler }}>
              <CircularProgress />
            </div>
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

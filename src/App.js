import './App.css';
import Weather from './Weather';
import React, { useState } from 'react';
import Card from './components/card';

let cityListHandler = [];

function App() {

  const [weatherData, setWeatherData] = useState([]);
  const [renderState, setRenderState] = useState(false);

  let cityInput = React.createRef();

  const callFetch = async () => {
    const loadWeather = async (param) => {
      let data = await Weather.getWeather(param);
      setWeatherData(data);
      setRenderState(true);
    }
    let city = cityInput.current.value;
    cityListHandler.push(city)
    loadWeather(cityListHandler);
  }

  const refreshPage = () => {
    window.location.reload();
  }

  const handleKeypress = e => {
    if (e.key === 'Enter') {
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
            <input id="input" onKeyPress={handleKeypress} ref={cityInput} type="text" name="city"></input>
          </div>
          <button type="submit" onClick={callFetch}>+</button>
        </div>
        <div className="space-between">
          <div className="cards-container">
            {weatherData.map((item, key) => (
              <Card key={key} isRender={renderState} name={item.name} main={item.weather ? item.weather[0].main : ''} temp={item.main ? item.main.temp : ''} min={item.main ? item.main.temp_min : ''} max={item.main ? item.main.temp_max : ''} />
            ))}
          </div>
          <footer>
            Feito com <span role="img" aria-label="coração">❤️</span> por Guilherme Veiga<br />
            Aplicativo feito para a finalidade de estudo da biblioteca ReactJS <br />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

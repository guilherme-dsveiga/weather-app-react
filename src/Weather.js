const apiClient = async (endpoint) => {
  const req = await fetch(
    `${process.env.REACT_APP_PUBLIC_BASE_URL}${endpoint}`
  );
  const json = req.json();
  return json;
};

const Weather = {
  getWeather: async (param) => {
    let weatherListData = [];
    for (let i = 0; i < param.length; i++) {
      weatherListData.push(
        await apiClient(
          `weather?q=${param[i]}&appid=${process.env.REACT_APP_PUBLIC_API_KEY}&units=metric`
        )
      );
    }
    return weatherListData;
  },
};

export default Weather;

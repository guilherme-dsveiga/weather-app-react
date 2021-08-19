const API_KEY = 'abc1b31f604e9f2dd20c699d0fafbdef';
const API_BASE = 'https://api.openweathermap.org/data/2.5/';

const basicFetch = async (endpoint) => {
        const req = await fetch(`${API_BASE}${endpoint}`)
        const json = req.json()
        return json;
}

export default {
        getWeather: async (param) => {
                let weatherListData = [];
                for (let i = 0; i < param.length; i++) {
                        weatherListData.push(await basicFetch(`weather?q=${param[i]}&appid=${API_KEY}&units=metric`))
                }
                return (weatherListData);
        }
}
import { apiClient } from "./apiClient";

export const getWeather = async (city) => {
  const response = await apiClient(
    `weather?q=${city}&appid=${process.env.REACT_APP_PUBLIC_API_KEY}&units=metric`
  );
  return response;
};

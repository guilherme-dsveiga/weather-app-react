export const apiClient = async (endpoint) => {
  const req = await fetch(
    `${process.env.REACT_APP_PUBLIC_BASE_URL}${endpoint}`
  );
  const json = req.json();
  return json;
};

export const getBusinessesFromAPI = async (body) => {
  const resp = await fetch(`/api/search-businesses`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  const data = await resp.json();
  return data;
};

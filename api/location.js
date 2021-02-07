export const getIPFromVisitor = async () => {
  const resp = await fetch(`https://ipinfo.io/json?token=11a825e5020175`);
  const data = await resp.json();
  return data;
};
export const getIPLocation = async (ip) => {
  const resp = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=c753697899f24dca89ff6a1e16b7e0e8&ip=${ip}`
  );
  const data = await resp.json();
  return data;
};

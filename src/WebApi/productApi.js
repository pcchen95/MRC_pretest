const BASE_URL = "https://api.twitch.tv/kraken/streams/";
const clientID = "tdvc2nlt9v001vzbdgzoon7av64cd2";
const accept = "application/vnd.twitchtv.v5+json";

const getQueryString = (queryParameters) => {
  const { game } = queryParameters || {};
  let queryString = "limit=30";
  if (game) queryString += `&game=${game}`;
  return queryString;
};

const getProducts = (queryParameters) => {
  const queryString = getQueryString(queryParameters);
  return fetch(`${BASE_URL}?${queryString}`, {
    headers: {
      "Client-ID": clientID,
      Accept: accept,
    },
  }).then((res) => res.json());
};

export { getProducts };

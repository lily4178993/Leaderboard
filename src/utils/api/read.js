const GET_ALL_PLAYERS = async (gameID = 'Zl4d7I488d4eb0267g2fUdz') => {
  const REQUEST_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
  const REQUEST = new Request(REQUEST_URL);
  const RESPONSE = await fetch(REQUEST);
  const SCOREBOARD = await RESPONSE.json();

  return SCOREBOARD.result;
};

export { GET_ALL_PLAYERS as default };
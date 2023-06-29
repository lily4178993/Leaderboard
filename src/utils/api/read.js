import myGameID from './gameID.js';

const MY_GAME_ID = myGameID;
const GET_ALL_PLAYERS = async (gameID = `${MY_GAME_ID}`) => {
  const REQUEST_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
  const REQUEST = new Request(REQUEST_URL);
  const RESPONSE = await fetch(REQUEST);
  const SCOREBOARD = await RESPONSE.json();

  return SCOREBOARD.result;
};

export { GET_ALL_PLAYERS as getAllPlayers, MY_GAME_ID as myGameID };
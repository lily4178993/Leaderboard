const CREATE_NEW_PLAYER = async (gameID, playerName, currentScore) => {
  const REQUEST_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
  const newObject = {
    player: playerName,
    score: `${currentScore}`,
  };
  const REQUEST = new Request(REQUEST_URL, {
    method: 'POST',
    header: { 'Content-type': 'application/json' },
    body: JSON.stringify(newObject),
  });
  await fetch(REQUEST);
};

export { CREATE_NEW_PLAYER as default };
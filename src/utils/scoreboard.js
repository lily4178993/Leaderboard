import { getAllPlayers, myGameID } from './api/read.js';

const SCORE_BOARD = document.querySelector('.scoreboard-container');
const SCORE_LIST = document.querySelector('.scoreboard-container .body');
const GET_PLAYERS = await getAllPlayers(myGameID);
const MY_BOARD_LIST = () => {
  const players = Object.values(GET_PLAYERS);
  for (let i = 0; i < players.length; i += 1) {
    const getPlayer = players[i];
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.innerHTML = `${getPlayer.user} ${getPlayer.score}`;
    SCORE_LIST.appendChild(LIST_ITEM);
  }
  SCORE_BOARD.appendChild(SCORE_LIST);
};

export { MY_BOARD_LIST as default };
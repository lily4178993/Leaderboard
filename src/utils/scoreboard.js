import getAllPlayers from './api/read.js';

const SCORE_BOARD = document.querySelector('.scoreboard-container');
const SCORE_LIST = document.querySelector('.scoreboard-container .body');

const MY_BOARD_LIST = () => {
  getAllPlayers.forEach((getPlayer) => {
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.innerHTML = `${getPlayer.player} ${getPlayer.score}`;
    SCORE_LIST.appendChild(LIST_ITEM);
  });
  SCORE_BOARD.appendChild(SCORE_LIST);
};

export { MY_BOARD_LIST as default };
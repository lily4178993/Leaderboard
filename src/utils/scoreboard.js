const SCORE_BOARD = document.querySelector('.scoreboard-container');
const SCORE_LIST = document.querySelector('.scoreboard-container .body');

const MY_BOARD_LIST = (playersData) => {
  SCORE_LIST.innerHTML = '';
  const players = playersData;
  for (let i = 0; i < players.length; i += 1) {
    const player = players[i];
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.innerHTML = `${player.user}: ${player.score}`;
    SCORE_LIST.appendChild(LIST_ITEM);
  }
  SCORE_BOARD.appendChild(SCORE_LIST);
};

export { MY_BOARD_LIST as default };
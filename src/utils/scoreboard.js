const SCORE_BOARD = document.querySelector('.scoreboard-container');
const SCORE_LIST = document.querySelector('.scoreboard-container .body');

const MY_SCOREBOARD = () => {
  SCORE_LIST.innerHTML = `
  <li>Name 400</li>
  <li>Name 233</li>
  <li>Name 209</li>
  <li>Name 29</li>
`;
  SCORE_BOARD.appendChild(SCORE_LIST);
};

module.exports = MY_SCOREBOARD;
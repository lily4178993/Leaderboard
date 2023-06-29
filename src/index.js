import './styles.css';
import myBoardList from './utils/scoreboard.js';
import checkInputValidity from './utils/inputFieldValidity.js';

const FORM_ELEMENT = document.querySelector('.add-score-container form');
FORM_ELEMENT.addEventListener('submit', (event) => {
  event.preventDefault();
  checkInputValidity();
});

// Add an eventListener on BUTTON_REFRESH
// Consume API to get new uptade of the players and their score
const BUTTON_REFRESH = document.getElementById('btn-refresh');
const MY_SCOREBOARD = () => BUTTON_REFRESH.addEventListener('click', myBoardList);

MY_SCOREBOARD();
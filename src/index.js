import './styles.css';
import refreshData from './utils/refreshData.js';
import checkInputValidity from './utils/inputFieldValidity.js';
import { alertSubmitMessage } from './utils/alertMessage.js';

const FORM_ELEMENT = document.querySelector('.add-score-container form');
FORM_ELEMENT.addEventListener('submit', (event) => {
  event.preventDefault();
  checkInputValidity();
  alertSubmitMessage();
});

// Add an eventListener on BUTTON_REFRESH
// Consume API to get new uptade of the players and their score
const BUTTON_REFRESH = document.getElementById('btn-refresh');
const MY_SCOREBOARD = () => BUTTON_REFRESH.addEventListener('click', refreshData);

MY_SCOREBOARD();